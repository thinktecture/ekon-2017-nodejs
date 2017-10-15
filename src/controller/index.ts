import { PingController } from './ping';
import { CustomerController } from './customer';
import { BillController } from './bill';

export const CONTROLLERS = [
	new PingController(),
	new CustomerController(),
	new BillController(),
];
