import { createFile } from '../utils'
import { createEntity } from './create-files'

export const createNewEntityCommand = ( name : string, path : string ) => {
  try {
    createFile( `${ path }/${ name }.entity.ts`, createEntity( name ) )
  } catch ( error : any ) {
    return error.code
  }
}
