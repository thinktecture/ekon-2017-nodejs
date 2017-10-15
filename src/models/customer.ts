import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Bill } from './bill';

@Entity()
export class Customer {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public firstname: string;

	@Column()
	public lastname: string;

	@OneToMany(type => Bill, bill => bill.customer)
	public bills: Bill[];
}
