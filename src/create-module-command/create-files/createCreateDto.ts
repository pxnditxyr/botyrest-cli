export const createCreateDto = ( name : string ) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
  
  return (
`
import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class Create${ nameCapitalized }Dto {
  @IsString()
  name: string

  @IsString()
  @IsOptional()
  description: string

  @IsBoolean()
  @IsOptional()
  status: boolean
}
`.trim() )
}
