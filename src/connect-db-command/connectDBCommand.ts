import { createFile, createFolder, editFile, getContentFile } from '../utils';
import { addInFileEnv, addInPackage } from './addInFiles';
import { addInApp } from './addInFiles/addInApp';
import { addInAppConfig } from './addInFiles/addInAppConfig';
import { createdockerCompose } from './createFiles';
import { createAppDataSource } from './createFiles/createAppDataSource';
import { createDatabaseIndex } from './createFiles/createDatabaseIndex';

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

  } catch ( error : any ) {
    return error.code
  }
}
