import { getFileName } from '../../utils'

export const addInInitializeModule = ( code : string, moduleName : string ) => {
  const fileName = getFileName( moduleName )
  const capitalizeModuleName = moduleName.charAt( 0 ).toUpperCase() + moduleName.slice( 1 )
  const importRegex = /import {(.*)} from ['"](.*)['"];/g
  const matches = code.match( importRegex )
  if ( !matches ) return code
  const lastImport = matches[ matches.length - 1 ]

  const newImport = `import { ${ capitalizeModuleName }Module, ${ capitalizeModuleName } } from '../modules/${ fileName }'`;
  const moduleDeclaration = `const ${ moduleName }Module = new ${ capitalizeModuleName }Module( server )`;

  const updatedCode = code.replace( lastImport, `${ lastImport }\n${ newImport }` );
  const finalCode = updatedCode.replace(
    /export const initilizeModules = \( server : BotyRestServer \) => {/,
    `export const ${ moduleName }Repository : Repository<${ capitalizeModuleName }> = AppDataSource.getRepository( ${ capitalizeModuleName } )

export const initilizeModules = ( server : BotyRestServer ) => {\n  ${ moduleDeclaration }\n`
  );

  return finalCode;
}
