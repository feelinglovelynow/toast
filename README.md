# 🕉 @feelinglovelynow/toast


## 💎 Install
```bash
pnpm add @feelinglovelynow/toast
```


## 🙏 Description
* Show a closeable `success` or `info` toast notification
* Toast closes by default after 9 seconds but this is alterable with the `ms` option
* Toast function returns a `removeToast()` function
* Toast function recieves a string or an array of items
    * IF string => toast shows as a `<span>`
    * ELSE IF array.length is 1 => toast shows as a `<span>`
    * ELSE => toast shows as an `unordered list`
* Includes lovely multiple toast showing animations for coming in and sliding / fading away


## 💚 Properties
```ts
function showToast (type: 'info' | 'success', items: string | string[], ms = 9000): () => void
```


## 💛 Prerequisite CSS
Requires [@feelinglovelynow/global-style](https://github.com/feelinglovelynow/global-style) or add this css to your site
```css
@keyframes fln__fade-in-from-above {
  0% {
    opacity: 0;
    transform: translateY(-9rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fln__fade-out-and-slide-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-9rem);
  }
}

html { /* Helps w/ rem, can still look good w/o just set rem/px as desired: https://stackoverflow.com/questions/59920538  */
  font-size: 62.5%;
}
```


## 🧡 Add wrapper to DOM
```html
<div id="fln__toast-wrapper"></div>
```


## ❤️ Add imports
```ts
import '@feelinglovelynow/toast/index.css'
import showToast from '@feelinglovelynow/toast'
```

## 💟 Example: Show info toast
```ts
const removeToast = showToast({ type: 'info', items: [ 'Foo' ] })
```

## 🌟 Example: Show success toast w/ 2 items + html link
```ts
showToast({ type: 'success', items: [ 'Foo', '<a href="/">Bar</a>' ] })
```


## ✨ Add custom styling
```scss
#fln__toast-wrapper {

}

.fln__toast {
  &.fln__toast--hide {

    .fln__toast__icon {

    }

    .fln__toast__icon-wrapper {

    }
  }
  &.fln__toast--info {

    .fln__toast__icon {

    }

    .fln__toast__icon-wrapper {

    }
  }

  &__icon-wrapper {

  }

  &__icon {

  }

  ul {

  }

  li {

  }

  &__close {
    &:hover {

    }

    svg {

    }
  }
}
```


## 🎁 All our NPM Packages
* [@feelinglovelynow/env-write](https://github.com/feelinglovelynow/env-write)
* [@feelinglovelynow/get-form-entries](https://github.com/feelinglovelynow/get-form-entries)
* [@feelinglovelynow/get-relative-time](https://github.com/feelinglovelynow/get-relative-time)
* [@feelinglovelynow/global-style](https://github.com/feelinglovelynow/global-style)
* [@feelinglovelynow/jwt](https://github.com/feelinglovelynow/jwt)
* [@feelinglovelynow/loop-backwards](https://github.com/feelinglovelynow/loop-backwards)
* [@feelinglovelynow/slug](https://github.com/feelinglovelynow/slug)
* [@feelinglovelynow/svelte-loading-anchor](https://github.com/feelinglovelynow/svelte-loading-anchor)
* [@feelinglovelynow/svelte-modal](https://github.com/feelinglovelynow/svelte-modal)
* [@feelinglovelynow/svelte-turnstile](https://github.com/feelinglovelynow/svelte-turnstile)
* [@feelinglovelynow/toast](https://github.com/feelinglovelynow/toast)
