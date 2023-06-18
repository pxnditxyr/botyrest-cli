#!/usr/bin/env node
import { mainMenu, pause } from './menus'

console.clear()

const main = async () => {

  let option = ''

  do {
    option = await mainMenu()
    console.log( { option } )
    if ( option !== '0' ) await pause()
  } while ( option !== '0' )
}

main()
