import { createNewEntityCommand } from '../create-entity-command'
import { createFile, createFolder, editFile, existsFile, getContentFile, getFileName } from '../utils'
import { addInAppDataSource, addInInitializeModule, addInPackage } from './addInFiles'
import { createModule, createService, createDtoIndex, createCreateDto, createUpdateDto, createController, createModuleIndex } from './create-files'

export const createModuleCommand = ( name : string ) => {
  
  const fileName = getFileName( name )
  try {
    const appContentPackage = getContentFile( './package.json' )
    const appDataSource = getContentFile( './src/database/data-source.ts' )
    
    const newContentPackage = addInPackage( appContentPackage )
    editFile( './package.json', newContentPackage )
    const newAppDataSource = addInAppDataSource( appDataSource, fileName )
    editFile( './src/database/data-source.ts', newAppDataSource )
    const newInitializeModules = getContentFile( './src/startup/initializeModules.ts' )
    editFile( './src/startup/initializeModules.ts', addInInitializeModule( newInitializeModules, name ) )
    
    const existsModuleFolder = existsFile( './src/modules' )
    if ( !existsModuleFolder )
      createFolder( './src/modules' )
    createFolder( `./src/modules/${ fileName }` )
    createFolder( `./src/modules/${ fileName }/dtos` )
    createFile( `./src/modules/${ fileName }/dtos/index.ts`, createDtoIndex( name ) )
    createFile( `./src/modules/${ fileName }/dtos/create-${ fileName }.dto.ts`, createCreateDto( name ) )
    createFile( `./src/modules/${ fileName }/dtos/update-${ fileName }.dto.ts`, createUpdateDto( name ) )
    createFile( `./src/modules/${ fileName }/${ fileName }.controller.ts`, createController( name ) )
    createFile( `./src/modules/${ fileName }/${ fileName }.service.ts`, createService( name ) )
    createFile( `./src/modules/${ fileName }/${ fileName }.module.ts`, createModule( name ) )
    createFile( `./src/modules/${ fileName }/index.ts`, createModuleIndex( name ) )
    createNewEntityCommand( fileName, `./src/modules/${ fileName }` )
  } catch ( error : any ) {
    return error.code
  }
}
