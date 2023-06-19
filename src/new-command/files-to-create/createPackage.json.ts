
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
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "dotenv": "^16.0.3",
    "botyrest": "^0.0.2"
  }
}
`.trim() )
