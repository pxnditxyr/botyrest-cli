
export const addInApp = ( originalCode : string ) => {
  const dataSourceImport = `
import { initilizeModules } from './startup'
import { AppDataSource } from './database'
`.trim();

  const importIndex = originalCode.indexOf( "import { getEnvironmentVariables } from './config'" );
  const insertIndex = originalCode.indexOf('\n', importIndex) + 1;

  const updatedCode = originalCode.slice(0, insertIndex) + dataSourceImport + '\n' + originalCode.slice(insertIndex);

  const serverInitializeIndex = updatedCode.indexOf("server.initializeServer()");
  const serverInitializeLineEndIndex = updatedCode.indexOf('\n', serverInitializeIndex);
  const serverInitializeLine = updatedCode.slice(serverInitializeIndex, serverInitializeLineEndIndex);

  const updatedCodeWithAdditionalCode = updatedCode.replace( serverInitializeLine, `
  AppDataSource.initialize().then(async () => {
    initilizeModules(server);
    await server.initializeServer();
  }).catch(error => logger.error(error))
  ` );

  return updatedCodeWithAdditionalCode;
}
