export const addInAppDataSource = ( originalCode : string, entityName : string ) => {
  const capitalizedName = entityName.charAt( 0 ).toUpperCase() + entityName.slice( 1 );
  const importStatement = `import { ${ capitalizedName } } from '../modules/${ entityName.toLowerCase() }'`;

  const importIndex = originalCode.indexOf( "import { getEnvironmentVariables } from '../config'" );
  const insertIndex = originalCode.indexOf( '\n', importIndex ) + 1;

  const updatedCode = originalCode.slice( 0, insertIndex ) + importStatement + '\n' + originalCode.slice( insertIndex );

  const entitiesIndex = updatedCode.indexOf( 'entities: [' );
  const openBracketIndex = updatedCode.indexOf( '[', entitiesIndex );
  const closeBracketIndex = updatedCode.indexOf( ']', openBracketIndex );

  const existingEntitiesList = updatedCode.slice( openBracketIndex + 1, closeBracketIndex ).trim();

  const entities = existingEntitiesList.length > 0 ? existingEntitiesList.split( ',' ).map( entity => entity.trim() ) : [];

  entities.push( ` ${ capitalizedName }` );

  const updatedEntitiesList = entities.join( ', ' );

  const finalCode = updatedCode.slice( 0, openBracketIndex + 1 ) + updatedEntitiesList + updatedCode.slice( closeBracketIndex );

  return finalCode;
}
