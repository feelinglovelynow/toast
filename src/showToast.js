/// <reference path="./types.d.ts" />

/**
 * Show a toast notification
 * @param { 'info' | 'success' } type 
 * @param { string | string[] } items
 * @param { number } [ms] 
 * @returns () => void
 */
export function showToast (type, items, ms = 9000)  {
  /** @type { HTMLElement | null } */
  let toast = null

  if (!window.flnToastWrapper) window.flnToastWrapper = document.getElementById('fln__toast-wrapper')

  /**
   * Remove a toast notification
   * @param { HTMLElement } toast 
   */
  function removeToast(toast) {
    if (toast && window.flnToastWrapper) {
      toast.classList.add('fln__toast--hide')
      toast.style.marginBottom = `-${toast.offsetHeight }px`

      setTimeout(() => { // after the toast hide animation is complete => remove the toast from the DOM
        const toastId = toast.getAttribute('id')
        const childNodes = window.flnToastWrapper?.childNodes

        if (childNodes) {
          for (const node of childNodes) { // loop the wrappers child nodes to find the node that was clicked (requested to be removed)
            if (node instanceof HTMLDivElement && node.getAttribute('id') === toastId) { // IF this is the child node toast that was requested to be removed
              window.flnToastWrapper?.removeChild(node) // remove the child node
              break
            }
          }
        }
      }, 810)
    }
  }

  if (window.flnToastWrapper) {
    let icon, inner
    const id = crypto.randomUUID()

    if (typeof items === 'string') inner = `<span>${ items }</span>`
    else if (items.length === 1) inner = `<span>${ items[0] }</span>`
    else inner = `<ul>${items.map(item => `<li>${item}</li>`).join('') }</ul>`

    switch (type) {
      case 'success':
        icon = '<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'
        break
      case 'info':
        icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>'
        break
    }

    window.flnToastWrapper.insertAdjacentHTML('beforeend', `
      <div id="${ id }" class="fln__toast fln__toast--${ type }">
        <div class="fln__toast__icon-wrapper">
          <div class="fln__toast__icon">
            ${ icon }
          </div>
        </div>
        ${ inner }
        <button class="fln__toast__close">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    `)

    toast = document.getElementById(id)

    if (toast) {
      const button = toast?.querySelector('button') 

      if (button) {
        button.addEventListener('click', () => {
          if (toast) removeToast(toast)
        })

        // setTimeout(() => {
        //   if (toast) removeToast(toast)
        // }, ms)
      }
    }
  }

  return () => {
    if (toast) removeToast(toast)
  }
}
