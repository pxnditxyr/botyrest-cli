export const addInAppConfig = ( content : string ) => {
  const splitedContent = content.split( '\n' )
  const indexOfImport = splitedContent.findIndex( line => line.includes( 'port: number' ) )
  splitedContent.splice( indexOfImport + 1, 0, `  dbName: string` )
  splitedContent.splice( indexOfImport + 2, 0, `  dbPass: string` )
  splitedContent.splice( indexOfImport + 3, 0, `  dbUser: string` )
  splitedContent.splice( indexOfImport + 4, 0, `  dbHost: string` )
  splitedContent.splice( indexOfImport + 5, 0, `  dbPort: number` )
  const indexOfInitializeServer = splitedContent.findIndex( line => line.includes( 'port: getEnvironmentVariables()' ) )

  splitedContent.splice( indexOfInitializeServer, 0,
`  dbName: process.env.DB_NAME || 'db_test',
  dbPass: process.env.DB_PASS || '1234',
  dbUser: process.env.DB_USER || 'pxndxs',
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbPort: Number( process.env.DB_PORT ) || 5432,` )
  return splitedContent.join( '\n' )
}
