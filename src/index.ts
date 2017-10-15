import 'reflect-metadata';
import { DatabaseProvider } from './database/index';

DatabaseProvider.configure({
	type: process.env.DATABASE_TYPE as any || 'mariadb',
	database: process.env.DATABASE_NAME || 'ekon',
	username: process.env.DATABASE_USERNAME || 'ekon',
	password: process.env.DATABASE_PASSWORD || 'ekon',
	host: process.env.DATABASE_HOST || 'localhost',
	port: +process.env.DATABASE_PORT || 3306,
	ssl: !!process.env.USE_SSL
});

console.log('Hallo EKON from Typescript!');
