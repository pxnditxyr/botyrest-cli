import { green, yellow } from '../utils'

export const printMainMenuInterface = () => {
  console.log( `${ green( '================================' ) }` )
  console.log( `${ green( '            Select an option' )     }` )
  console.log( `${ green( '================================' ) }` )
  console.log( `${ yellow( `For options 2, 3, 4, 5 you must be inside a project folder.` ) }` )
  console.log( `${ yellow( `If you are not inside a project folder, please, select option 1.` ) }` )
  console.log( `${ green( '================================' ) }\n` )
}
