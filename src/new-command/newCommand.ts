import { createFile, createFolder } from '../utils'
import { createApp, createAppConfig, createConfigIndex, createEnv, createGitignore, createPackageJson, createREADME, createTsconfigJson } from './files-to-create/'

export const newCommand = ( name : string ) => {
  try {
    createFolder( name )
    createFile( `${ name }/package.json`, createPackageJson( name ) )
    createFile( `${ name }/.gitignore`, createGitignore() )
    createFile( `${ name }/tsconfig.json`, createTsconfigJson() )
    createFile( `${ name }/README.md`, createREADME( name ) )
    createFile( `${ name }/.env`, createEnv() )
    createFolder( `${ name }/src` )
    createFolder( `${ name }/src/config` )
    createFile( `${ name }/src/app.ts`, createApp() )
    createFile( `${ name }/src/config/app.config.ts`, createAppConfig() )
    createFile( `${ name }/src/config/index.ts`, createConfigIndex() )
  } catch ( error : any ) {
    return error.code
  }
}
