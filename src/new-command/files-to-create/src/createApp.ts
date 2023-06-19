export const createApp = () => (
`
import dotenv from 'dotenv'
dotenv.config()

import { BotyRestServer, Logger } from 'botyrest'
import { getEnvironmentVariables } from './config'

const logger = new Logger( 'app' )

try {
  const server = new BotyRestServer({
    port: getEnvironmentVariables().port,
  })
  server.initializeServer()
} catch ( error : any ) {
  logger.error( error )
}
`.trim() )
