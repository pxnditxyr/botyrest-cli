import { getFileName } from '../../utils'

export const createModule = ( name : string ) => {

  const nameCapitalized = name.charAt( 0 ).toUpperCase() + name.slice( 1 )
  const fileName = getFileName( name )
  return (
`
import { BotyRestServer, Module } from 'bottyrest';
import { ${ nameCapitalized }Controller } from './${ fileName }.controller';

@Module({
  controllers: [ ${ nameCapitalized }Controller ],
})
export class ${ nameCapitalized }Module {
  constructor ( private server : BotyRestServer ) {}
}
` )
}
