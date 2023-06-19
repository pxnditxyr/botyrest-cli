import { getFileName } from '../../utils';

export const createService = ( name : string ) => {
  const nameCapitalized = name.charAt( 0 ).toUpperCase() + name.slice( 1 )
  const fileName = getFileName( name )
  return (
`
import { Repository } from 'typeorm';
import { AppDataSource } from '../../database';
import { ${ nameCapitalized } } from './${ fileName }.entity';
import { Create${ nameCapitalized }Dto, Update${ nameCapitalized }Dto } from './dtos';

export class ${ nameCapitalized }Service {
  private readonly ${ name }Repository : Repository<${ nameCapitalized }> = AppDataSource.getRepository( ${ nameCapitalized } )

  constructor () {}
  
  async findAll () {
    const ${ name } = await this.${ name }Repository.find()
    return ${ name }
  }

  async findOne ( term : string ) {
    const ${ name } = await this.${ name }Repository.findOneBy({ id: term })
    return ${ name }
  }

  async create ( create${ nameCapitalized }Dto : Create${ nameCapitalized }Dto ) {
    const ${ name } = this.${ name }Repository.create( create${ nameCapitalized }Dto )
    return await this.${ name }Repository.save( ${ name } )
  }

  async update ( id : string, update${ nameCapitalized }Dto : Update${ nameCapitalized }Dto ) {
    const ${ name }ToUpdate = await this.${ name }Repository.preload({
      id,
      ...update${ nameCapitalized }Dto
    })

    if ( !${ name }ToUpdate ) return

    await this.${ name }Repository.save( ${ name }ToUpdate )
    return ${ name }ToUpdate
  }

  async delete ( id : string ) {
    const ${ name }ToDelete = await this.findOne( id )
    if ( !${ name }ToDelete ) return
    return await this.${ name }Repository.delete( id )
  }
}
`.trim() )
}
