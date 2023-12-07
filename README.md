# 🕉 @feelinglovelynow/toast


## 💎 Install
```bash
pnpm add @feelinglovelynow/toast
```


## 🤓 Unit Tests
![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg?style=flat)


## 🙏 Description
* Show a closeable `success` or `info` toast notification
* Toast closes by default after 9 seconds but this is alterable with the `ms` option
* Toast function returns the dom `id` for the toast and a `removeToast()` function
* `@returns { { id: string, removeToast: () => void } }`
* Toast `id` can locate the toast and the close button on the toast
* `<div id="${ id }" class="fln__toast fln__toast--${ type }">`
* `<button id="${ id }__close" class="fln__toast__close">`
* `showToast()` recieves a string or an array of items
    * IF string => toast shows as a `<span>`
    * ELSE IF array.length is 1 => toast shows as a `<span>`
    * ELSE => toast shows as an `unordered list`
* Includes lovely multiple toast showing animations for sliding / fading in and sliding / fading away


## 💚 Properties
```ts
import { showToast } from '@feelinglovelynow/toast'

showToast (type: 'info' | 'success', items: string | string[], ms = 9000): () => void
```


## 💛 Add wrapper to DOM
```html
<div id="fln__toast-wrapper"></div>
```


## 🧡 Add imports
```ts
import '@feelinglovelynow/toast/index.css'
import { showToast } from '@feelinglovelynow/toast'
```

## ❤️ Example: Show info toast
```ts
const { id, removeToast } = showToast('info', 'Foo')
```

## 💟 Example: Show success toast
* With 2 items that will show as an unordered list in the array order
* 2nd item has an html link
* Auto close in 6 seconds
```ts
showToast('success', [ 'Foo', '<a href="/">Bar</a>' ], 6000)
```


## 🌟 Prerequisite CSS
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


## ✨ Add custom styling
```scss
#fln__toast-wrapper {

}

.fln__toast {
  &.fln__toast--hide {

  }
  &.fln__toast--info {

    .fln__toast__icon-wrapper {

      .fln__toast__icon {

      }
    }
  }
  &.fln__toast--success {

    .fln__toast__icon-wrapper {

      .fln__toast__icon {

      }
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

  span {

  }

  &__close {
    &:hover {

    }

    svg {

    }
  }
}
```


## 🎁 All Our Packages
1. @feelinglovelynow/datetime-local: [NPM](https://www.npmjs.com/package/@feelinglovelynow/datetime-local) ⋅ [Github](https://github.com/feelinglovelynow/datetime-local)
1. @feelinglovelynow/dgraph: [NPM](https://www.npmjs.com/package/@feelinglovelynow/dgraph) ⋅ [Github](https://github.com/feelinglovelynow/dgraph)
1. @feelinglovelynow/env-write: [NPM](https://www.npmjs.com/package/@feelinglovelynow/env-write) ⋅ [Github](https://github.com/feelinglovelynow/env-write)
1. @feelinglovelynow/get-form-entries: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-form-entries) ⋅ [Github](https://github.com/feelinglovelynow/get-form-entries)
1. @feelinglovelynow/get-relative-time: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-relative-time) ⋅ [Github](https://github.com/feelinglovelynow/get-relative-time)
1. @feelinglovelynow/global-style: [NPM](https://www.npmjs.com/package/@feelinglovelynow/global-style) ⋅ [Github](https://github.com/feelinglovelynow/global-style)
1. @feelinglovelynow/jwt: [NPM](https://www.npmjs.com/package/@feelinglovelynow/jwt) ⋅ [Github](https://github.com/feelinglovelynow/jwt)
1. @feelinglovelynow/loop-backwards: [NPM](https://www.npmjs.com/package/@feelinglovelynow/loop-backwards) ⋅ [Github](https://github.com/feelinglovelynow/loop-backwards)
1. @feelinglovelynow/slug: [NPM](https://www.npmjs.com/package/@feelinglovelynow/slug) ⋅ [Github](https://github.com/feelinglovelynow/slug)
1. @feelinglovelynow/svelte-catch: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-catch) ⋅ [Github](https://github.com/feelinglovelynow/svelte-catch)
1. @feelinglovelynow/svelte-kv: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-kv) ⋅ [Github](https://github.com/feelinglovelynow/svelte-kv)
1. @feelinglovelynow/svelte-loading-anchor: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-loading-anchor) ⋅ [Github](https://github.com/feelinglovelynow/svelte-loading-anchor)
1. @feelinglovelynow/svelte-modal: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-modal) ⋅ [Github](https://github.com/feelinglovelynow/svelte-modal)
1. @feelinglovelynow/svelte-turnstile: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-turnstile) ⋅ [Github](https://github.com/feelinglovelynow/svelte-turnstile)
1. @feelinglovelynow/toast: [NPM](https://www.npmjs.com/package/@feelinglovelynow/toast) ⋅ [Github](https://github.com/feelinglovelynow/toast)
