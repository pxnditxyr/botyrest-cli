export interface IDatabaseStructure {
  [ key: string ]: {
    port: number
    manager: string
  }
}

export const databaseStructure : IDatabaseStructure = {
  'mysql': {
    port: 3306,
    manager: 'mysql2',
  },
  'postgres': {
    port: 5432,
    manager: 'pg',
  },
  'sqlite': {
    port: 1433,
    manager: 'sqlite3',
  },
  'mongodb': {
    port: 27017,
    manager: 'mongodb',
  },
}
