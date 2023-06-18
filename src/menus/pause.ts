import inquirer from 'inquirer'
import { pauseMessage } from '../command-line-interfaces'

const pauseQuestion = [
  {
    type: 'input',
    name: 'enter',
    message: pauseMessage()
  }
]


export const pause = async () => {
  console.log( '\n' )
  await inquirer.prompt( pauseQuestion )
}
