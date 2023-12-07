import crypto from 'crypto'
import { showToast } from '../showToast.js'
import { describe, test, expect, jest, beforeEach } from '@jest/globals'


/**
 * @param { string } str 
 * @returns { string }
 */
function oneLineString (str) {
  return str.replace(/\s{2,}/g, '')
}


describe('showToast()', () => {
  let base = '<div id="fln__toast-wrapper"></div>'


  beforeEach(() => {
    jest.useFakeTimers()
    document.body.innerHTML = base
    Object.defineProperty(globalThis, 'crypto', { value: crypto })
  })


  describe('one item', () => {
    /**
     * @param { string } message 
     */
    function validate (message) {
      const r1 = showToast('info', message)
      const expected1 = `
        <div id="fln__toast-wrapper">
          <div id="${ r1.id }" class="fln__toast fln__toast--info">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
              </div>
            </div>
            <span>${ message }</span>
            <button id="${ r1.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      `

      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(expected1))
      jest.advanceTimersByTime(10000)
      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(base))

      const r2 = showToast('success', message)
      const r3 = showToast('info', message)
      const expected2 = `
        <div id="fln__toast-wrapper">
          <div id="${ r2.id }" class="fln__toast fln__toast--success">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <span>${ message }</span>
            <button id="${ r2.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div id="${ r3.id }" class="fln__toast fln__toast--info">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
              </div>
            </div>
            <span>${ message }</span>
            <button id="${ r3.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      `
      const expected3 = `
        <div id="fln__toast-wrapper">
          <div id="${ r2.id }" class="fln__toast fln__toast--success">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <span>${ message }</span>
            <button id="${ r2.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      `
      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(expected2))

      /** @type { HTMLButtonElement } */ // @ts-ignore
      const button = document.getElementById(`${ r3.id }__close`)
      button.click()
      jest.advanceTimersByTime(900)
      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(expected3))

      r2.removeToast()
      jest.advanceTimersByTime(900)
      expect(oneLineString(document.body.innerHTML)).toEqual(base)
    }


    test('string', () => {
      validate('hello world')
    })


    test('html', () => {
      validate('hello world <a href="/">foo</a> <strong>bar</strong>')
    })
  })


  describe('many items', () => {
    /**
     * @param { string[] } items 
     */
    function validate (items) {
      let inner
      const r1 = showToast('info', items)

      if (items.length === 1) inner = `<span>${ items[0] }</span>`
      else inner = `<ul>${ items.map(item => `<li>${ item }</li>`).join('') }</ul>`

      const expected1 = `
        <div id="fln__toast-wrapper">
          <div id="${ r1.id }" class="fln__toast fln__toast--info">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
              </div>
            </div>
            ${ inner }
            <button id="${ r1.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      `

      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(expected1))
      jest.advanceTimersByTime(10000)
      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(base))

      const r2 = showToast('success', items)
      const r3 = showToast('info', items)
      const expected2 = `
        <div id="fln__toast-wrapper">
          <div id="${ r2.id }" class="fln__toast fln__toast--success">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            ${ inner }
            <button id="${ r2.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div id="${ r3.id }" class="fln__toast fln__toast--info">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
              </div>
            </div>
            ${ inner }
            <button id="${ r3.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      `
      const expected3 = `
        <div id="fln__toast-wrapper">
          <div id="${ r3.id }" class="fln__toast fln__toast--info">
            <div class="fln__toast__icon-wrapper">
              <div class="fln__toast__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
              </div>
            </div>
            ${ inner }
            <button id="${ r3.id }__close" class="fln__toast__close">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      `

      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(expected2))

      /** @type { HTMLButtonElement } */ // @ts-ignore
      const button = document.getElementById(`${ r2.id }__close`)
      button.click()
      jest.advanceTimersByTime(900)
      expect(oneLineString(document.body.innerHTML)).toEqual(oneLineString(expected3))

      r3.removeToast()
      jest.advanceTimersByTime(900)
      expect(oneLineString(document.body.innerHTML)).toEqual(base)      
    }


    test('string', () => {
      validate([ 'hello world' ])
    })


    test('html', () => {
      validate([
        'hello world <a href="/">foo</a>',
        '<strong>bar</strong>'
      ])
    })
  })
})
