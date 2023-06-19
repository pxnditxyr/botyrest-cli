import { readInput } from '../menus/readInput'
import { red } from '../utils'

const optionCreateProject = async () => {
  const projectName = await readInput( 'Project Name: ' )
  console.log( { projectName } )
}

export const mainMenuManager = async ( option : string ) => {
  switch ( option ) {
    case '1':
      const projectName = await readInput( 'Project Name: ' )
      console.log( { projectName } )
      break
    case '2':
      console.log( 'Option 2 Selected' )
      break
    case '3':
      console.log( 'Option 3 Selected' )
      break
    case '4':
      console.log( 'Option 4 Selected' )
      break
    case '5':
      console.log( 'Option 5 Selected' )
      break

    default:
      console.log( `${ red( `Error: ${ option } is not a valid option` ) }` )
  }
}


