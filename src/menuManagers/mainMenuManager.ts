import { createdNewProjectSuccess, projectCouldNotBeCreated, projectFolderAlreadyExists } from '../command-line-interfaces'
import { readInput } from '../menus/readInput'
import { newCommand } from '../new-command'
import { magenta, green } from '../utils'
import { connectDBCommand } from '../connect-db-command'
import { connectDatabaseMenu } from '../menus/connectDabaseMenu'
import { createNewEntityCommand } from '../create-entity-command'

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
      console.log( 'Option 5 Selected' )
      break
    case '6':
      console.log( 'Option 6 Selected' )
      break
    case '0':
      console.log( `${ magenta( 'Bye!' ) }` )
      break
  }
  return '0'
}
