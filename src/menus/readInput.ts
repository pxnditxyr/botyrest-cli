import inquirer from 'inquirer'

export const readInput = async ( message: string, noValidation?: boolean ): Promise<string> => {
  const question = [
    {
      type: 'input',
      name: 'input',
      message,
      validate( value : string ) {
        const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
        if ( !noValidation && !regex.test( value ) ) {
          return 'Please enter a valid value'
        }
        return true
      }
    }
  ]
  const { input } = await inquirer.prompt( question )
  return input
}
