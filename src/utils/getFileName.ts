
export const getFileName = ( name : string ) : string => {
  const fileName = name.replace( /[A-Z]/g, ( letter ) => `-${ letter.toLowerCase() }` )
  return fileName.toLowerCase()
}

