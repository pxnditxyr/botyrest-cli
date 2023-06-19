import { createFile, createFolder, editFile, getContentFile } from '../utils';
import { addInApp, addInAppConfig, addInFileEnv, addInPackage } from './addInFiles';
import { createdockerCompose, createAppDataSource, createDatabaseIndex, createStartupIndex, createInitializeModules  } from './createFiles';

export const connectDBCommand = ( databaseName : string ) => {
  try {
    const appContentPackage = getContentFile( './package.json' )
    const appContent = getContentFile( './src/app.ts' )
    const appContentEnv = getContentFile( './.env' )
    const appConfig = getContentFile( './src/config/app.config.ts' )
    
    const newEnv = addInFileEnv( appContentEnv, databaseName )
    editFile( './.env', newEnv )
    const newPackage = addInPackage( appContentPackage, databaseName )
    editFile( './package.json', newPackage )
    const newApp = addInApp( appContent )
    editFile( './src/app.ts', newApp )
    const newAppConfig = addInAppConfig( appConfig )
    editFile( './src/config/app.config.ts', newAppConfig )

    if ( databaseName === 'postgres' )
      createFile( './docker-compose.yaml', createdockerCompose() )
    
    createFolder( './src/database' )
    createFile( './src/database/index.ts', createDatabaseIndex() )
    createFile( './src/database/data-source.ts', createAppDataSource( databaseName ) )
    createFolder( './src/startup' )
    createFile( './src/startup/index.ts', createStartupIndex() )
    createFile( './src/startup/initializeModules.ts', createInitializeModules() )

  } catch ( error : any ) {
    return error.code
  }
}
