
// import dotenv from 'dotenv'
// dotenv.config()
//
// import { BotyRestServer, Logger } from 'botyrest'
// import { getEnvironmentVariables } from './config'
//
// const logger = new Logger( 'app' )
//
// try {
//   const server = new BotyRestServer({
//     port: getEnvironmentVariables().port,
//   })
//   server.initializeServer()
// } catch ( error : any ) {
//   logger.error( error )
// }

// convert this to:

// import dotenv from 'dotenv'
// dotenv.config()
//
// import { BotyRestServer } from './server'
// import { AppDataSource } from './database'
// import { Logger } from './logger'
//
//
// const server = new BotyRestServer()
// const logger = new Logger( 'app' )
//
// AppDataSource.initialize().then( async () => {
//   await server.initializeServer()
// } ).catch( error => logger.error( error ) )

export const addInApp = ( content : string ) => {
  const splitedContent = content.split( '\n' )
  const indexOfImport = splitedContent.findIndex( line => line.includes( 'import { BotyRestServer, Logger } from' ) )
  splitedContent.splice( indexOfImport + 1, 0, `import { AppDataSource } from './database'` )
  const indexOfInitializeServer = splitedContent.findIndex( line => line.includes( 'server.initializeServer()' ) )
  splitedContent.splice( indexOfInitializeServer, 0, `\tAppDataSource.initialize().then( async () => {` )
  splitedContent.splice( indexOfInitializeServer + 1, 0, `\t\tawait server.initializeServer()` )
  splitedContent.splice( indexOfInitializeServer + 2, 0, `\t} ).catch( error => logger.error( error ) )` )
  const indexOfInitializeServer2 = splitedContent.findIndex( line => line.includes( '  server.initializeServer()' ) )
  splitedContent.splice( indexOfInitializeServer2, 1 )
  return splitedContent.join( '\n' )
}
