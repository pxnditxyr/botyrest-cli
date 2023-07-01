interface INecessaryPackages {
  [ key: string ]: {
    version: string
  }
}

export const necessaryPackages : INecessaryPackages = {
  'botyrest': {
    version: '^0.1.0',
  },
  'dotenv': {
    version: '^16.0.3',
  },
  'typeorm': {
    version: '^0.3.16',
  },
  'typescript': {
    version: '^5.0.4',
  },
  '@types/node': {
    version: '^20.3.1',
  },
  'mongodb': {
    version: '^5.6.0',
  },
  'mysql2': {
    version: '^3.3.5',
  },
  'pg': {
    version: '^8.11.0',
  },
  'sqlite3': {
    version: '^5.1.6',
  },
  'class-validator': {
    version: '^0.14.0'
  }
}
