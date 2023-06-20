import { green, yellow } from '../utils'

export const printConnectDatabaseMenuInterface = () => {
  console.log( `${ green( `========================================` ) }` )
  console.log( `${ green( `|` ) } ${ yellow( `Connect Database Menu` ) } ${ green( `|` ) }` )
  console.log( `${ green( `========================================` ) }` )
}

export const printConnectDatabaseSuccess = () => {
  console.log( `${ green( `========================================` ) }` )
  console.log( `${ green( `|` ) } ${ yellow( `Connect Database Success` ) } ${ green( `|` ) }` )
  console.log( `${ green( `|` ) } Run the following command in the terminal ${ green( `|` ) }` )
  console.log( `${ green( `|` ) } ${ yellow( `npm i` ) } ${ green( `|` ) }` )
  console.log( `${ green( `|` ) } if you select ${ yellow( `Postgres` ) } ${ green( `|` ) }` )
  console.log( `${ green( `|` ) } ${ yellow( `docker compose up -d` ) } ${ green( `|` ) }` )
  console.log( `${ green( `|` ) } if you select another database  you need config the .env file ${ green( `|` ) }` )
  console.log( `${ green( `========================================` ) }` )
}
