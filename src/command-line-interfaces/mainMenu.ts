import { cyan, green } from '../utils'

export const mainMenuInterface = () => {
  console.log( `${ green( '================================' ) }` )
  console.log( `${ green( '            Select an option' )     }` )
  console.log( `${ green( '================================' ) }` )

  console.log( `${ cyan( '1.' ) } Create New Project` )
  console.log( `${ cyan( '2.' ) } Create New Module` )
  console.log( `${ cyan( '3.' ) } Create New Entity` )
  console.log( `${ cyan( '4.' ) } Create New Service` )
  console.log( `${ cyan( '5.' ) } Create New Controller` )
  console.log( `${ cyan( '0.' ) } Exit\n` )
}
