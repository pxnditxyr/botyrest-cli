import { getFileName } from '../../utils';

export const createUpdateDto = ( name : string ) => {
  const nameCapitalized = name.charAt( 0 ).toUpperCase() + name.slice( 1 )
  // name file capitalized characters must be replaced with - and lowercase
  const fileName = getFileName( name )
  return (
`
import { PartialType } from 'botyrest'
import { Create${ nameCapitalized }Dto } from './create-${ fileName }.dto';

export class Update${ nameCapitalized }Dto extends PartialType( Create${ nameCapitalized }Dto ) {}
` )
}
