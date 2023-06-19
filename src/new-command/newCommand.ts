import { createFile, createFolder } from '../utils'
import { createApp, createGitignore, createPackageJson, createREADME, createTsconfigJson } from './files-to-create/'

export const newCommand = ( name : string ) => {
  createFolder( name )
  createFile( `${ name }/package.json`, createPackageJson( name ) )
  createFile( `${ name }/.gitignore`, createGitignore() )
  createFile( `${ name }/tsconfig.json`, createTsconfigJson() )
  createFile( `${ name }/README.md`, createREADME( name ) )
  createFolder( `${ name }/src` )
  createFile( `${ name }/src/app.ts`, createApp() )
}
