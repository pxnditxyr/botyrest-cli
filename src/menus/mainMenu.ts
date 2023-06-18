import inquirer from 'inquirer'
import { printMainMenuInterface, selectOptionMessage } from '../command-line-interfaces'

const mainMenuQuestions = [
  {
    type: 'list',
    name: 'option',
    message: selectOptionMessage(),
    choices: [
      {
        value: '1',
        name: 'Create New Project'
      },
      {
        value: '2',
        name: 'Create New Module'
      },
      {
        value: '3',
        name: 'Create New Entity'
      },
      {
        value: '4',
        name: 'Create New Service'
      },
      {
        value: '5',
        name: 'Create New Controller'
      },
      {
        value: '0',
        name: 'Exit'
      }
    ]
  }
]

export const mainMenu = async () => {
  printMainMenuInterface()
  const { option } = await inquirer.prompt( mainMenuQuestions )
  return option
}
