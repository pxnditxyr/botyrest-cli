import inquirer from 'inquirer'

export const readInput = async ( message: string ): Promise<string> => {
  const question = [
    {
      type: 'input',
      name: 'input',
      message,
      validate( value : string ) {
        const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
        if ( !regex.test( value ) ) {
          return 'Please enter a valid value'
        }
        return true
      }
    }
  ]
  const { input } = await inquirer.prompt( question )
  return input
}
