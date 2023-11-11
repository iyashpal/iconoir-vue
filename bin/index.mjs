import {optimize} from 'svgo'
import camelcase from 'camelcase'
import fs from "node:fs/promises"
import {compile as compileVue} from '@vue/compiler-dom'

const transform = (svg, componentName, format) => {
    let {code} = compileVue(svg, {mode: 'module'})

    if (format === 'esm') {
        return code.replace('export function', 'export default function')
    }

    return code
        .replace(
            /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
            (_match, imports, _quote, mod) => {
                let newImports = imports
                    .split(',')
                    .map((i) => i.trim().replace(/\s+as\s+/, ': '))
                    .join(', ')

                return `const { ${newImports} } = require("${mod}")`
            }
        )
        .replace('export function render', 'module.exports = function render')
};


async function getIcons(type) {


    let files = await fs.readdir(`./node_modules/iconoir/icons/${type}`)


    return Promise.all(files.map(async (file) => {

        let componentFilename = file.replace(/\.svg$/, '');

        let incompatibleNames = {
            '1st-medal': 'medal-1st',
            '2x2-cell': 'cell-2x2',
            '3d-add-hole': 'add-hole-3d',
            '3d-arc-center-pt': 'arc-center-pt-3d',
            '3d-arc': 'arc-3d',
            '3d-bridge': 'bridge-3d',
            '3d-center-box': 'center-box-3d',
            '3d-draft-face': 'draft-face-3d',
            '3d-ellipse-three-pts': 'ellipse-three-pts-3d',
            '3d-ellipse': 'ellipse-3d',
            '3d-pt-box': 'pt-box-3d',
            '3d-rect-corner-to-corner': 'rect-corner-to-corner-3d',
            '3d-rect-from-center': 'rect-from-center-3d',
            '3d-rect-three-pts': 'rect-three-pts-3d',
            '3d-select-edge': 'select-edge-3d',
            '3d-select-face': 'select-face-3d',
            '3d-select-point': 'select-point-3d',
            '3d-select-solid': 'select-solid-3d',
            '3d-three-pts-box': 'three-pts-box-3d',
            '4k-display': 'display-4k',
            '360-view': 'view-360',
        };

        let svgContent = await fs.readFile(`./node_modules/iconoir/icons/${type}/${file}`, 'utf8')

        return {

            svg: optimize(`${svgContent}`, {
                plugins: [
                    'sortAttrs',
                    'removeDimensions',
                ]
            }).data,

            componentName: `${camelcase(incompatibleNames[componentFilename] ? incompatibleNames[componentFilename] : componentFilename, {pascalCase: true})}`,
        };
    }))
}

async function generateIcons(format, type) {

    let outDir = `./${type}/${format === 'esm' ? '/esm' : ''}`;


    await fs.mkdir(outDir, {recursive: true}, (error) => {
        if (error) throw error;
    });

    let icons = await getIcons(type)

    await Promise.all(icons.flatMap(async ({componentName, svg}) => {

        let content = await transform(svg, componentName, format)

        let types = `import { RenderFunction } from 'vue';\ndeclare const ${componentName}: RenderFunction;\nexport default ${componentName};\n`;


        return [

            fs.writeFile(`${outDir}/${componentName}.js`, content, {unicode: 'utf8'}),

            ...(types ? [fs.writeFile(`${outDir}/${componentName}.d.ts`, types, {unicode: 'utf8'})] : []),
        ]


    }));


    await fs.writeFile(`${outDir}/index.js`, exportAll(icons, format), {unicode: 'utf8'})

    await fs.writeFile(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false), {unicode: 'utf8'})


}


function exportAll(icons, format, includeExtension = true) {
    return icons
        .map(({componentName}) => {
            let extension = includeExtension ? '.js' : ''
            if (format === 'esm') {
                return `export { default as ${componentName} } from './${componentName}${extension}'`
            }
            return `module.exports.${componentName} = require("./${componentName}${extension}")`
        })
        .join('\n')
}

function build() {
    console.log(`Building package...`)



    Promise.all([
        fs.rm('./solid', {force: true, recursive: true}),
        fs.rm('./regular', {force: true, recursive: true}),
    ])

        .then(() => Promise.all([
            generateIcons('cjs', 'regular'),
            generateIcons('cjs', 'solid'),
            generateIcons('esm', 'regular'),
            generateIcons('esm', 'solid'),
        ]))

        .then(() => {
            fs.writeFile(`./solid/package.json`, `{"module": "./esm/index.js"}`, {unicode: 'utf8'})
            fs.writeFile(`./regular/package.json`, `{"module": "./esm/index.js"}`, {unicode: 'utf8'})
            fs.writeFile(`./solid/esm/package.json`, `{"type": "module"}`, {unicode: 'utf8'})
            fs.writeFile(`./regular/esm/package.json`, `{"type": "module"}`, {unicode: 'utf8'})
        })

        .then(() => {

            console.log(`Finished building package.`)

        });
}


build()
