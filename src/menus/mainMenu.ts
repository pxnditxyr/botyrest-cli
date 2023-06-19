import inquirer from 'inquirer'
import { printMainMenuInterface, selectOptionMessage } from '../command-line-interfaces'
import { cyan } from '../utils'

const mainMenuQuestions = [
  {
    type: 'list',
    name: 'option',
    message: selectOptionMessage(),
    choices: [
      {
        value: '1',
        name: `${ cyan( '1.' ) } Create New Project`
      },
      {
        value: '2',
        name: `${ cyan( '2.' ) } Connect project to database`
      },
      {
        value: '3',
        name: `${ cyan( '3.' ) } Create New Module`
      },
      {
        value: '4',
        name: `${ cyan( '4.' ) } Create New Entity`
      },
      {
        value: '5',
        name: `${ cyan( '5.' ) } Create New Service`
      },
      {
        value: '6',
        name: `${ cyan( '6.' ) } Create New Controller`
      },
      {
        value: '0',
        name: `${ cyan( '0.' ) } Exit`
      }
    ]
  }
]

export const mainMenu = async () => {
  printMainMenuInterface()
  const { option } = await inquirer.prompt( mainMenuQuestions )
  return option
}
