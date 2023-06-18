#!/usr/bin/env node
import { pause, showMenu } from './utils'
console.clear()

const main = async () => {

  let option = ''

  do {
    option = await showMenu()
    console.log( { option } )
    if ( option !== '0' ) await pause()
  } while ( option !== '0' )
}

main()
