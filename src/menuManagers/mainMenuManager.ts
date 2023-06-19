import { createdNewProjectSuccess, projectCouldNotBeCreated, projectFolderAlreadyExists } from '../command-line-interfaces'
import { readInput } from '../menus/readInput'
import { newCommand } from '../new-command'
import { magenta, green } from '../utils'
import { connectDBCommand } from '../connect-db-command'
import { connectDatabaseMenu } from '../menus/connectDabaseMenu'
import { createNewEntityCommand } from '../create-entity-command'
import { createNewControllerCommand } from '../create-controller-command'
import { createModuleExampleCommand } from '../create-module-example'
import { createModuleCommand } from '../create-module-command'

const createProjectOption = async () => {
  const projectName = await readInput( `Project ${ green( 'Name' ) }: ` )
  const error = newCommand( projectName )
  errorManager( error, projectName, createdNewProjectSuccess )
}

export const connectProjectToDatabaseOption = async () => {
  const database = await connectDatabaseMenu()
  const error = connectDBCommand( database )
  errorManager( error, database )
}

export const createNewEntityOption = async () => {
  const entityName = await readInput( `Entity ${ green( 'Name' ) }: ` )
  const entityPath = await readInput( `Entity ${ green( 'Path' ) }: `, true )
  const error = createNewEntityCommand( entityName, entityPath )
  errorManager( error, entityName )
}

export const createNewControllerOption = async () => {
  const controllerName = await readInput( `Controller ${ green( 'Name' ) }: ` )
  const controllerPath = await readInput( `Controller ${ green( 'Path' ) }: `, true )
  const error = createNewControllerCommand( controllerName, controllerPath )
  errorManager( error, controllerName )
}

export const createNewModuleExampleOption = async () => {
  const moduleName = await readInput( `Module ${ green( 'Name' ) }: ` )
  const error =  createModuleExampleCommand( moduleName )
  errorManager( error, moduleName )
}

export const createNewModuleOption = async () => {
  const moduleName = await readInput( `Module ${ green( 'Name' ) }: ` )
  const error = createModuleCommand( moduleName )
  errorManager( error, moduleName )
}

const errorManager = ( error : string | undefined, name : string, successPrint? : ( name : string ) => void ) => {
  if ( error === undefined ) {
    if ( successPrint === undefined )
      console.log( `${ magenta( 'Success!' ) }` )
    else
      successPrint( name )
  }
  else if ( error === 'EEXIST' )
    projectFolderAlreadyExists( name )
  else
    projectCouldNotBeCreated( name )
}

export const mainMenuManager = async ( option : string ) => {
  switch ( option ) {
    case '1':
      await createProjectOption()
      break
    case '2':
      await connectProjectToDatabaseOption()
      break
    case '3':
      await createNewModuleOption()
      break
    case '4':
      await createNewEntityOption()
      break
    case '5':
      await createNewControllerOption()
      break
    case '6':
      await createNewModuleExampleOption()
      break
    case '0':
      console.log( `${ magenta( 'Bye!' ) }` )
      break
  }
  return '0'
}
