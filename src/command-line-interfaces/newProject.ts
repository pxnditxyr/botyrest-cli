import { cyan, green, magenta, red, yellow } from '../utils'

export const createdNewProjectSuccess = ( projectName : string ) => {
  console.log( `\n${ magenta( `=================================================` ) }` )
  console.log( `Project ${ green( projectName ) } created!` )
  console.log( `${ yellow( `Now you can run the following commands:` ) }` )
  console.log( `\t${ cyan( `cd ${ projectName }` ) }` )
  console.log( `\t${ cyan( 'npm i' ) }` )
  console.log( `${ yellow( `To start the project in separated terminals run:` ) }` )
  console.log( `\t${ cyan( 'npm run build:dev' ) }` )
  console.log( `\t${ cyan( 'npm run start:dev' ) }` )
  console.log( `${ magenta( `=================================================` ) }\n` )
}

export const projectFolderAlreadyExists = ( projectName : string ) => {
  console.log( `${ magenta( 'Error:' ) } ${ red( `The folder` ) } ${ green( projectName ) } ${ red( `already exists.` ) }` )
  console.log( `${ yellow( `Please, try again with another name.` ) }` )
}

export const projectCouldNotBeCreated = ( projectName : string ) => {
  console.log( `${ magenta( 'Error:' ) } ${ red( `The folder` ) } ${ green( projectName ) } ${ red( `could not be created.` ) }` )
  console.log( `${ yellow( `Please, try again.` ) }` )
}
