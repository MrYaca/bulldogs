# Pasos para configurar TypeScript

**Estos pasos son para configurar TypeScript en una aplicacón existente de React**

## Paso 1

Instalar paquetes necesarios
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
o
`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

## Paso 2

Cambiar las extensions de los archivs `.js` por `.tsx`

## Paso 3

Iportar React en archivos principales `import React from 'react'`

## Paso 3

En `index.tsx`, castear `document.getElementById('root')` como `HTMLElement` quedando al final como `document.getElementById('root') as HTMLElement`

## Paso 5

Crear el archivo `tsconfig.json` con la siguiente configuración básica:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react-jsx"
  }
}
```

## Paso 6

Crear el archivo de tipos `react-app-env.d.ts` con la directiva `/// <reference types="react-scripts" />`

## Paso 7

Probar de nuevo la aplicación
