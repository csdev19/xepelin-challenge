import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { ENTITIES } from './models/entities';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ENTITIES,
  migrations: ['libs/common/src/database/migrations/*.ts'],
});
