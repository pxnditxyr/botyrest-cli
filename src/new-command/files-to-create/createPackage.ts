import { necessaryPackages } from "../../utils";

export const createPackageJson = ( name : string ) => (`
{
  "name": "${ name }",
  "version": "0.0.1",
  "description": "RestFul API with BotyRest",
  "main": "dist/index",
  "types": "dist/types/index",
  "scripts": {
    "build:dev": "npx tsc --watch",
    "build:prod": "npx tsc",
    "start:prod": "node ./dist/app.js",
    "start:dev": "node --watch ./dist/app.js"
  },
  "keywords": [],
  "author": "BotyStudio",
  "license": "ISC",
  "devDependencies": {
    "typescript": "${ necessaryPackages[ 'typescript' ].version }",
    "@types/node": "${ necessaryPackages[ '@types/node' ].version }"
  },
  "dependencies": {
    "dotenv": "${ necessaryPackages[ 'dotenv' ].version }",
    "bottyrest": "${ necessaryPackages[ 'bottyrest' ].version }"
  }
}
`.trim() )
