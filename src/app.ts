#!/usr/bin/env node
import { mainMenuManager } from './menuManagers/mainMenuManager'
import { mainMenu, pause } from './menus'

console.clear()

const main = async () => {

  let option = ''

  do {
    option = await mainMenu()
    option = await mainMenuManager( option )
    if ( option !== '0' ) await pause()
  } while ( option !== '0' )
}

main()
