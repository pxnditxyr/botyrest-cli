import { databaseStructure } from '../../utils'

export const addInFileEnv = ( content : string, database : string ) => {
  const portOfDatabase = databaseStructure[ database ].port
  return (
`
${ content }
DB_NAME=db_test
DB_PASS=1234
DB_USER=pxndxs
DB_HOST=127.0.0.1
DB_PORT=${ portOfDatabase }
`.trim() )
}
