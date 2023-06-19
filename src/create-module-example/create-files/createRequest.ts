export const createRequest = ( name : string ) => {
  const nameLower = name.toLowerCase()

  return (
`
# ${ name } Request Example

GET http://127.0.0.1:3001/${ nameLower }

GET http://127.0.0.1:3001/${ nameLower }/1

POST http://127.0.0.1:3001/${ nameLower }
Content-Type: application/json

{
  "name": "some name",
}

PATCH http://127.0.0.1:3001/${ nameLower }/id
Content-Type: application/json

{
  "name": "some name updated",
}

DELETE http://127.0.0.1:3001/${ nameLower }/id
Content-Type: application/json

{}
`.trim() )
}
