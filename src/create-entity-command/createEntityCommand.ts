import { createFile } from '../utils'
import { createEntity } from './create-files'

export const createNewEntityCommand = ( name : string, path : string ) => {
  try {
    const capitalizedName = name.charAt( 0 ).toUpperCase() + name.slice( 1 )
    createFile( `${ path }/${ capitalizedName }.ts`, createEntity( name ) )
  } catch ( error : any ) {
    return error.code
  }
}
