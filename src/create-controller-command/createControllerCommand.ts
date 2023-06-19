import { createFile } from '../utils'
import { createController } from './create-files'

export const createNewControllerCommand = ( name : string, path : string ) => {
  try {
    createFile( `${ path }/${ name }.controller.ts`, createController( name ) )
  } catch ( error : any ) {
    return error.code
  }
}
