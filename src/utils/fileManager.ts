import fs from 'fs'

export const createFile = ( path : string , content : string ) => {
  fs.writeFileSync( path, content )
}

export const createFolder = ( path : string ) => {
  fs.mkdirSync( path )
}

export const deleteFolder = ( path : string ) => {
  fs.rmdirSync( path, { recursive: true } )
}

export const deleteFile = ( path : string ) => {
  fs.unlinkSync( path )
}

export const getContentFile = ( path : string ) => {
  const content = fs.readFileSync( path, 'utf-8' )
  return content
}

export const editFile = ( path : string, content : string ) => {
  fs.writeFileSync( path, content )
}
