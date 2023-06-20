import { getFileName } from '../../utils';

export const createService = ( name : string ) => {
  const nameCapitalized = name.charAt( 0 ).toUpperCase() + name.slice( 1 )
  const fileName = getFileName( name )
  return (
`
import { Create${ nameCapitalized }Dto, Update${ nameCapitalized }Dto } from './dtos';

import { ${ name }Repository } from '../../startup';

export class ${ nameCapitalized }Service {

  async findAll () {
    const ${ name } = await ${ name }Repository.find()
    return ${ name }
  }

  async findOne ( term : string ) {
    const ${ name } = await ${ name }Repository.findOneBy({ id: term })
    return ${ name }
  }

  async create ( create${ nameCapitalized }Dto : Create${ nameCapitalized }Dto ) {
    const ${ name } = ${ name }Repository.create( create${ nameCapitalized }Dto )
    return await ${ name }Repository.save( ${ name } )
  }

  async update ( id : string, update${ nameCapitalized }Dto : Update${ nameCapitalized }Dto ) {
    const ${ name }ToUpdate = await ${ name }Repository.preload({
      id,
      ...update${ nameCapitalized }Dto
    })

    if ( !${ name }ToUpdate ) return

    await ${ name }Repository.save( ${ name }ToUpdate )
    return ${ name }ToUpdate
  }

  async delete ( id : string ) {
    const ${ name }ToDelete = await this.findOne( id )
    if ( !${ name }ToDelete ) return
    return await ${ name }Repository.delete( id )
  }
}
`.trim() )
}
