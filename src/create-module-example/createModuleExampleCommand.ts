import { createFile, existsFile, getContentFile } from '../utils'
import { createRequest } from './create-files'

export const createModuleExampleCommand = ( name : string ) => {
  try {
    let newRequest = createRequest( name )
    if ( existsFile( `./request.http` ) ) {
      const content = getContentFile( `./request.http` )
      newRequest = content + '\n\n' + newRequest 
    } 
    createFile( `./request.http`, newRequest )
  } catch ( error : any ) {
    return error.code
  }
}
