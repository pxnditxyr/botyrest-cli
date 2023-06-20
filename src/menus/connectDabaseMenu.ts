import inquirer from 'inquirer'
import { printConnectDatabaseMenuInterface, printMainMenuInterface, selectOptionMessage } from '../command-line-interfaces'
import { cyan } from '../utils'

const mainMenuQuestions = [
  {
    type: 'list',
    name: 'option',
    message: selectOptionMessage(),
    choices: [
      {
        value: 'postgres',
        name: `${ cyan( '1.' ) } Postgres`
      },
      {
        value: 'mysql',
        name: `${ cyan( '2.' ) } Mysql`
      },
      {
        value: 'sqlite',
        name: `${ cyan( '3.' ) } Sqlite`
      },
      {
        value: 'mongodb',
        name: `${ cyan( '4.' ) } Mongo DB`
      },
      {
        value: 'mysql',
        name: `${ cyan( '5.' ) } Maria DB`
      },
    ]
  }
]

export const connectDatabaseMenu = async () => {
  printConnectDatabaseMenuInterface()
  const { option } = await inquirer.prompt( mainMenuQuestions )
  return option
}
