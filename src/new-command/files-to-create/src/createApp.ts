export const createApp = () => (
`
import dotenv from 'dotenv'
dotenv.config()

import { BotyRestServer, Logger } from 'botyrest'

const server = new BotyRestServer()
const logger = new Logger( 'app' )

server.initializeServer()
`.trim() )
