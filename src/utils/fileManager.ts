import fs from 'fs'

export const createFile = ( path : string , content : string ) => {
  fs.writeFileSync( path, content )
}

export const createFolder = ( path : string ) => {
  fs.mkdirSync( path )
}
