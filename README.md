# Vue Iconoir Icons

![NPM Version](https://img.shields.io/npm/v/iconoir-vue?style=flat-square) ![NPM Monthly Downloads](https://img.shields.io/npm/dm/iconoir-vue?style=flat-square) ![NPM License](https://img.shields.io/npm/l/iconoir-vue?style=flat-square)
 
Iconoir is an open-source library with 1k+ unique SVG icons. No premium icons, no email sign-up, no newsletters. You can browse the full suite of icons at iconoir.com.

`iconoir-vue` is an open source package that exports these icons as Vue.js components that can be used in all of your Vue projects.

# Installation
```bash
yarn add iconoir-vue
```
or
```bash
npm i iconoir-vue
```

## Usage

Example usage:
```html
// Composition API

<script setup>
    import { Github } from 'iconoir-vue/regular'
    import { AdobePhotoshop  } from 'iconoir-vue/solid'
</script>

<template>
    <div>
        <Github class="w-5 h-5" />
        <AdobePhotoshop class="w-5 h-5" />
    </div>
</template>
```

```html
// Option API

<script>
    import { Github } from 'iconoir-vue/regular'
    import { AdobePhotoshop  } from 'iconoir-vue/solid'
    export default {
        components : {
            Github,
            AdobePhotoshop,
        } 
    }
</script>

<template>
    <div>
        <Github class="w-5 h-5" />
        <AdobePhotoshop class="w-5 h-5" />
    </div>
</template>
```