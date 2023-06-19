import { databaseStructure, necessaryPackages } from '../../utils'

export const addInPackage = ( packageJson : string, database : string ) => {
  const databaseManager = databaseStructure[ database ].manager

  const packageJsonObj = JSON.parse( packageJson )

  packageJsonObj.dependencies = {
    ...packageJsonObj.dependencies,
    "typeorm": necessaryPackages[ 'typeorm' ].version,
    [ databaseManager ]: necessaryPackages[ databaseManager ].version,
  }
  return JSON.stringify( packageJsonObj, null, 2 )
}
