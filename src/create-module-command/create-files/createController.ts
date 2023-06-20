
export const createController = ( name : string ) => {
  const nameCapitalized = name.charAt( 0 ).toUpperCase() + name.slice( 1 )
  return (
`
import { Delete, Get, Patch, Post } from 'bottyrest'
import { ${ nameCapitalized }Service } from './${ name }.service'
import { Create${ nameCapitalized }Dto, Update${ nameCapitalized }Dto } from './dtos'

export class ${ nameCapitalized }Controller {
  [ key : string ]: any
    
  private readonly ${ name }Service = new ${ nameCapitalized }Service()

  constructor () {}

  @Get()
  async findAll () {
    return await this.${ name }Service.findAll()
  }

  @Get( ':term' )
  async findOne ( term : string ) {
    return await this.${ name }Service.findOne( term )
  }

  @Post()
  async create ( create${ nameCapitalized }Dto : Create${ nameCapitalized }Dto  ) {
    return await this.${ name }Service.create( create${ nameCapitalized }Dto )
  }

  @Patch( ':id' )
  async update ( id : string, update${ nameCapitalized }Dto : Update${ nameCapitalized }Dto ) {
    return await this.${ name }Service.update( id, update${ nameCapitalized }Dto )
  }

  @Delete( ':id' )
  async delete ( id : string ) {
    return await this.${ name }Service.delete( id )
  }
}
`.trim() )
}
