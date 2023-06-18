import * as readline from 'node:readline';
import { mainMenuInterface, pauseMessageQuestion, selectOptionQuestion } from '../command-line-interfaces';

export const showMenu = () => {

  return new Promise<string>( resolve => {

    console.clear()
    mainMenuInterface()

    const readLine = readline.createInterface( {
      input: process.stdin,
      output: process.stdout
    } )

    readLine.question( selectOptionQuestion(), ( option ) => {
      readLine.close()
      resolve( option )
    } )

  } )
}

export const pause = () => {
  return new Promise<void>( resolve => {
    const readLine = readline.createInterface( {
      input: process.stdin,
      output: process.stdout
    } )
    readLine.question( pauseMessageQuestion(), ( _option ) => {
      readLine.close()
      resolve()
    } )
  })
}
