
export const createInitializeModules = () => (
`
import { BotyRestServer } from 'botyrest';
import { Repository } from 'typeorm';
import { AppDataSource } from '../database';

export const initilizeModules = ( server : BotyRestServer ) => {}
`.trim()
)
