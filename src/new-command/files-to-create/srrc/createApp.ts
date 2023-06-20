export const createApp = () => (
`
import dotenv from 'dotenv'
dotenv.config()

import { BotyRestServer, Logger } from 'bottyrest'
import { getEnvironmentVariables } from './config'

const logger = new Logger( 'app' )

try {
  const server = new BotyRestServer({
    port: getEnvironmentVariables().port,
    origin: true,
    rateLimitOptions: {
      max: 100,
      timeWindow: '5 minutes'
    }
  })
  server.initializeServer()
} catch ( error : any ) {
  logger.error( error )
}
`.trim() )
