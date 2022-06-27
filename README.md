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

## Replacements
| Original | New |  Component |
|:--------|:-----|:-----------|
| 1st-medal | medal-1st | Medal1StIcon |
| 2x2-cell | cell-2x2 | Cell2X2Icon |
| 3d-add-hole | add-hole-3d | AddHole3DIcon |
| 3d-arc-center-pt | arc-center-pt-3d | ArcCenterPt3DIcon |
| 3d-arc | arc-3d | Arc3DIcon |
| 3d-bridge | bridge-3d | Bridge3DIcon |
| 3d-center-box | center-box-3d | CenterBox3DIcon |
| 3d-ellipse-three-pts | ellipse-three-pts-3d | EllipseThreePts3DIcon |
| 3d-ellipse | ellipse-3d | Ellipse3DIcon |
| 3d-pt-box | pt-box-3d | PtBox3DIcon |
| 3d-rect-corner-to-corner | rect-corner-to-corner-3d | RectCornerToCorner3DIcon |
| 3d-rect-from-center | rect-from-center-3d | RectFromCenter3DIcon |
| 3d-rect-three-pts | rect-three-pts-3d | RectThreePts3DIcon |
| 3d-select-edge | select-edge-3d | SelectEdge3DIcon |
| 3d-select-face | select-face-3d | SelectFace3DIcon |
| 3d-select-point | select-point-3d | SelectPoint3DIcon |
| 3d-select-solid | select-solid-3d | SelectSolid3DIcon |
| 3d-three-pts-box | three-pts-box-3d | ThreePtsBox3DIcon |
| 4k-display | display-4k | Display3KIcon |
| 360-view | view-360 | View360Icon |

## Source

You can find the main official repository [here](https://github.com/lucaburgio/iconoir).

## License

MIT License
