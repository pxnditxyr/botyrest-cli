import { getFileName } from '../../utils'

export const createDtoIndex = ( name : string ) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
  const fileName = getFileName( name )
  return (
`
export { Create${ nameCapitalized }Dto } from './create-${ fileName }.dto'
export { Update${ nameCapitalized }Dto } from './update-${ fileName }.dto'
`.trim()
  )
}
