
export const createAppDataSource = ( database : string ) => (
`
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { getEnvironmentVariables } from '../config'

const {
  dbHost,
  dbName,
  dbPass,
  dbPort,
  dbUser,
} = getEnvironmentVariables()

export const AppDataSource = new DataSource({
  type: '${ database }',
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPass,
  database: dbName,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
})
`.trim() )
