export const createController = ( name : string ) => {

  const capitalizedName = name.charAt( 0 ).toUpperCase() + name.slice( 1 )

  return (
`
import { Delete, Get, Patch, Post } from 'bottyrest'

export class ${ capitalizedName }Controller {
  [ key : string ]: any

  @Get()
  async findAll () {
    return 'this action returns all ${ name }'
  }

  @Get( ':term' )
  async findOne ( term : string ) {
    return 'this action returns a ${ name }'
  }

  @Post()
  async create ( create${ capitalizedName }Dto : {}  ) {
    return 'this action adds a new ${ name }'
  }

  @Patch( ':id' )
  async update ( id : string, update${ capitalizedName }Dto : {} ) {
    return 'this action updates a ${ name }'
  }

  @Delete( ':id' )
  async delete ( id : string ) {
    return 'this action removes a ${ name }'
  }
}
` )
}
