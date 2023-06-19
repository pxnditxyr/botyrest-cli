
export const createAppConfig = () => (
`
export interface IEnvironmentVariables {
  port: number
}

export const getEnvironmentVariables = () : IEnvironmentVariables => ({
  port: Number( process.env.PORT ) || 3000,
})
`.trim() )
