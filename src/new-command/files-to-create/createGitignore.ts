
export const createGitignore = () => (
`
/package-lock.json
/node_modules
/dist
/postgres
/mongo
/mysql
/sqlite
/sqlserver

.env
`.trim() )
