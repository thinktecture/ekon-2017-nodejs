import { Connection, createConnection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/mysqlconnectionoptions';
import { Bill } from '../models/bill';
import { Customer } from '../models/customer';

export interface DatabaseConfiguration {
	type: 'mysql' | 'mariadb' ;
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
	ssl?: boolean;
}

export class DatabaseProvider {

	private static connection: Connection;
	private static configuration: DatabaseConfiguration;

	public static configure(databaseConfiguration: DatabaseConfiguration): void {
		DatabaseProvider.configuration = databaseConfiguration;
	}

	public static async getConnection(): Promise<Connection> {

		if (DatabaseProvider.connection) {
			return DatabaseProvider.connection;
		}

		if (!DatabaseProvider.configuration) {
			throw new Error('DatabaseProvider is not configured yet.');
		}

		const { type, host, port, username, password, database, ssl } = DatabaseProvider.configuration;

		DatabaseProvider.connection = await createConnection({
			type, host, port, username, password, database,
			extra: {
				ssl
			},
			entities: [
				// TODO: Add entities
				Bill,
				Customer,
			],
			synchronize: true,
		} as MysqlConnectionOptions);

		return DatabaseProvider.connection;
	}
}
