# iconoir vue
 
<p align="center">
  Iconoir is an open-source library with 1000+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.
<p>

<p align="center">
  <a href="https://iconoir.com"><strong>Browse at iconoir.com &rarr;</strong></a>
</p>

## Basic Usage

You can download any icon of the pack directly from https://iconoir.com or get them from this repository.

Additionally, the icons are available via the `iconoir` NPM package:

```bash
yarn add iconoir-vue
# or
npm i iconoir-vue
```

Example usage:
```html
// Composition API
<template>
    <div>
        <GithubIcon class="w-5 h-5" />
    </div>
</template>

<script setup>
    import { GithubIcon } from 'iconoir-vue'
</script>
```

```html
// Option API
<template>
    <div>
        <GithubIcon class="w-5 h-5" />
    </div>
</template>

<script>
    import { GithubIcon } from 'iconoir-vue'
    export default {
        components : {
            GithubIcon
        } 
    }
</script>
```

## Source

You can find the main official repository [here](https://github.com/lucaburgio/iconoir).

## License

MIT License
