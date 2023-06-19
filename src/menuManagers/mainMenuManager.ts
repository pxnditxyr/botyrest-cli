import { createdNewProjectSuccess, projectCouldNotBeCreated, projectFolderAlreadyExists } from '../command-line-interfaces'
import { readInput } from '../menus/readInput'
import { newCommand } from '../new-command'
import { magenta, green } from '../utils'
import { connectDBCommand } from '../connect-db-command'
import { connectDatabaseMenu } from '../menus/connectDabaseMenu'
import { createNewEntityCommand } from '../create-entity-command'
import { createNewControllerCommand } from '../create-controller-command'
import { createModuleExampleCommand } from '../create-module-example'

const createProjectOption = async () => {
  const projectName = await readInput( `Project ${ green( 'Name' ) }: ` )
  const error = newCommand( projectName )
  if ( error === undefined )
    createdNewProjectSuccess( projectName )
  else if ( error === 'EEXIST' )
    projectFolderAlreadyExists( projectName )
  else
    projectCouldNotBeCreated( projectName )
}

export const connectProjectToDatabaseOption = async () => {
  const database = await connectDatabaseMenu()
  connectDBCommand( database )
}

export const createNewEntityOption = async () => {
  const entityName = await readInput( `Entity ${ green( 'Name' ) }: ` )
  const entityPath = await readInput( `Entity ${ green( 'Path' ) }: `, true )
  createNewEntityCommand( entityName, entityPath )
}

export const createNewControllerOption = async () => {
  const controllerName = await readInput( `Controller ${ green( 'Name' ) }: ` )
  const controllerPath = await readInput( `Controller ${ green( 'Path' ) }: `, true )
  createNewControllerCommand( controllerName, controllerPath )
}

export const createNewModuleExampleOption = async () => {
  const moduleName = await readInput( `Module ${ green( 'Name' ) }: ` )
  createModuleExampleCommand( moduleName )
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
      console.log( 'Option 3 Selected' )
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
