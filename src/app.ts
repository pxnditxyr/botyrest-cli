#!/usr/bin/env node
// import { mainMenuManager } from './menuManagers/mainMenuManager'
import { mainMenu, pause } from './menus'
import { readInput } from './menus/readInput'
import { newCommand } from './new-command'

console.clear()

const main = async () => {

  let option = ''

  do {
    option = await mainMenu()
    switch ( option ) {
      case '1':
        const projectName = await readInput( 'Project Name: ' )
        newCommand( projectName )
        option = '0'
        break
      case '2':
        console.log( 'Option 2 Selected' )
        break
      case '3':
        console.log( 'Option 3 Selected' )
        break
      case '4':
        console.log( 'Option 4 Selected' )
        break
      case '5':
        console.log( 'Option 5 Selected' )
        break
      case '0':
        break
    }
    if ( option !== '0' ) await pause()
  } while ( option !== '0' )
}

main()
