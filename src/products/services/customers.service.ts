import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomersDto, UpdateCustomersDto } from '../dtos/customers.dtos';
import { Customer } from '../entities/customers.entity';

@Injectable()
export class CustomersService {
	private counterId = 1;

	private customers: Customer[] = [{
		id: 1,
		name: 'Brand 1',
		correo: 'example@gmail.com',
		phone: '999 999 999',
		address: 'Av. 1rt July',
	}];


	findAll() {
		return this.customers;
	}

	findOne(id: number) {
		const user = this.customers.find(resp => resp.id === id)

		if (!user) {
			throw new NotFoundException(`Customer ${id} not fount`)

		}
		return user;
	}

	create(payload: CreateCustomersDto) {

		this.counterId++;

		const newUser = {
			id: this.counterId,
			...payload
		}

		this.customers.push(newUser)
		return newUser
	}

	update(id: number, payload: UpdateCustomersDto) {
		const user = this.findOne(id);

		if (user) {
			const index = this.customers.findIndex(item => item.id === id);
			this.customers[index] = {
				...user,
				...payload,
			}

			return this.customers[index]
		}

		return null;

	}

	remove(id: number) {
		const index = this.customers.findIndex(item => item.id === id)

		if (index === -1) {
			throw new NotFoundException(`Customer ${id} not fount`)
			return null;
		}

		this.customers.splice(index, 1)
		return true
	}
}
