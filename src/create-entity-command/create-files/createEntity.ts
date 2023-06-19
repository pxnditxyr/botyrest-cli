export const createEntity = ( name : string ) => {
  const pluralName = name.endsWith( 's' ) || name.endsWith( 'x' ) || name.endsWith( 'z' ) ? `${ name }es` : `${ name }s`.toLowerCase()
  const entityName = pluralName.replace( /[^a-zA-Z]/g, '' )
  const capitalizedName = entityName.charAt( 0 ).toUpperCase() + entityName.slice( 1 )


  return (
`
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity( '${ entityName }' )
export class ${ capitalizedName } {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string
  
  @Column( 'text',{ unique: true } )
  name: string

  @Column( 'text', { nullable: true } )
  description: string

  @Column( 'boolean', { default: true } )
  status: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  checkFields () {
    this.name = this.name.trim().toLowerCase()
  }

  @BeforeUpdate()
  checkOptionalFieldsBeforeUpdate () {
    this.checkFields()
  }
}
` )
}
