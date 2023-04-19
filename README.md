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
    import { Github } from 'iconoir-vue'
</script>

<template>
    <div>
        <Github class="w-5 h-5" />
    </div>
</template>
```

```html
// Option API

<script>
    import { Github } from 'iconoir-vue'
    export default {
        components : {
            Github
        } 
    }
</script>

<template>
    <div>
        <Github class="w-5 h-5" />
    </div>
</template>
```

## Icon names
For the most part, the Vue components are named as PascalCase variations of their reference names (i.e. add-circle-outline becomes AddCircleOutline). However, some names have been altered slightly either because they start with numerical digits, which would lead to invalid Vue component names, or because they are organizations which use PascalCase in their brand names, such as GitHub. The altered names are as follows:

| Iconoir Name | New Name |  Vue Component |
|:--------|:-----|:-----------|
| 1st-medal | medal-1st | Medal1St |
| 2x2-cell | cell-2x2 | Cell2X2 |
| 3d-add-hole | add-hole-3d | AddHole3D |
| 3d-arc-center-pt | arc-center-pt-3d | ArcCenterPt3D |
| 3d-arc | arc-3d | Arc3D |
| 3d-bridge | bridge-3d | Bridge3D |
| 3d-center-box | center-box-3d | CenterBox3D |
| 3d-draft-face | draft-face-3d | DraftFace3D |
| 3d-ellipse-three-pts | ellipse-three-pts-3d | EllipseThreePts3D |
| 3d-ellipse | ellipse-3d | Ellipse3D |
| 3d-pt-box | pt-box-3d | PtBox3D |
| 3d-rect-corner-to-corner | rect-corner-to-corner-3d | RectCornerToCorner3D |
| 3d-rect-from-center | rect-from-center-3d | RectFromCenter3D |
| 3d-rect-three-pts | rect-three-pts-3d | RectThreePts3D |
| 3d-select-edge | select-edge-3d | SelectEdge3D |
| 3d-select-face | select-face-3d | SelectFace3D |
| 3d-select-point | select-point-3d | SelectPoint3D |
| 3d-select-solid | select-solid-3d | SelectSolid3D |
| 3d-three-pts-box | three-pts-box-3d | ThreePtsBox3D |
| 4k-display | display-4k | Display3K |
| 360-view | view-360 | View360 |
| github | github | Github |
