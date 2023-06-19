import { necessaryPackages } from '../../utils'

export const addInPackage = ( packageJson : string ) => {

  const packageJsonObj = JSON.parse( packageJson )
  if ( packageJsonObj.dependencies[ 'class-validator' ] )
    return packageJson

  packageJsonObj.dependencies = {
    ...packageJsonObj.dependencies,
    "class-validator": necessaryPackages[ 'class-validator' ].version,
  }
  return JSON.stringify( packageJsonObj, null, 2 )
}
