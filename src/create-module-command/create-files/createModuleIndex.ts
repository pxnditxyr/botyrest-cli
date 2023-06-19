import { getFileName } from '../../utils'

export const createModuleIndex = ( name : string ) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
  const fileName = getFileName( name )
  return (
`
export { ${ nameCapitalized } } from './${ fileName }.entity'
export { ${ nameCapitalized }Module } from './${ fileName }.module'
`.trim() )
}
