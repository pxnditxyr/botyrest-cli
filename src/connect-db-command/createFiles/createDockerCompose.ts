
export const createdockerCompose = () => (
`
version: '3'

services:
  db:
    image: postgres
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: ${ '${DB_NAME}' }
      POSTGRES_PASSWORD: ${ '${DB_PASS}' }
      POSTGRES_USER: ${ '${DB_USER}' }
    container_name: boty-rest
    volumes:
      - ./postgres:/var/lib/postgresql/data
`
)
