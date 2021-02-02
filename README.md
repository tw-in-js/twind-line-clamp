# @twind/line-clamp

A [Twind](https://twind.dev) extension that provides utilities for visually truncating text after a fixed number of lines.

[![MIT License](https://flat.badgen.net/github/license/tw-in-js/twind-line-clamp)](https://github.com/tw-in-js/twind-line-clamp/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@twind/line-clamp?icon=npm&label&cache=10800&color=blue)](https://www.npmjs.com/package/@twind/line-clamp)
[![Github](https://flat.badgen.net/badge/icon/tw-in-js%2Ftwind-line-clamp?icon=github&label)](https://github.com/tw-in-js/twind-line-clamp)
[![Module Size](https://flat.badgen.net/badgesize/brotli/https:/unpkg.com/@twind/line-clamp/line-clamp.js?icon=jsdelivr&label&color=blue&cache=10800)](https://unpkg.com/@twind/line-clamp/line-clamp.js 'brotli module size')
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@twind/line-clamp/line-clamp.d.ts)

> Based on [@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp).

## Installation

Install from npm:

```sh
# Using npm
npm install @twind/line-clamp

# Using Yarn
yarn add @twind/line-clamp
```

## Usage as Directive

Use the `lineClamp(lines)` function to specify how many lines of text should be visible before truncating:

```js
import { lineClamp } from '@twind/line-clamp'

document.body.innerHTML = `
  <p class="${tw`max-w-xs mx-auto ${lineClamp(3)}`}">
    Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.
  </p>
`
```

To remove any line-clamping, use `lineClamp('none')`:

```js
document.body.innerHTML = `
  <p class="${tw`max-w-xs mx-auto ${lineClamp(3)} md:${lineClamp('none')}`}">
    Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.
  </p>
`
```

> Note that the `lineClamp(lines)` set other properties like `display` and `overflow` in addition to `-webkit-line-clamp` which are not unset by `lineClamp('none')`, so depending on what you are trying to achieve you may need to explicitly override those properties with utilities like `flex` or `overflow-visible` as well.

## Usage as Plugin

Add the plugin to plugins of your setup call:

```js
import { lineClamp } from '@twind/line-clamp'

setup({
  plugins: {
    'line-clamp': lineClamp,
  },
})
```

Use the `line-clamp-{n}` utilities to specify how many lines of text should be visible before truncating:

```html
<p class="line-clamp-3">
  Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis
  dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate
  possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.
</p>
```

To remove any line-clamping, use `line-clamp-none`:

```html
<p class="line-clamp-3 md:line-clamp-none">
  Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis
  dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate
  possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.
</p>
```

## Theming

A `lineClamp` section is added to the theme. Its values are used for looking up the value. If no value us found the given parameter is used.

```js
setup({
  theme: {
    lineClamp: {
      card: '5',
    },
  },
})

tw(lineClamp('card'))
// => -webkit-line-clamp:5

// Not found in theme => use as is
tw(lineClamp('7'))
// => -webkit-line-clamp:7
```

## License

[MIT](https://github.com/tw-in-js/line-clamp/blob/main/LICENSE)
