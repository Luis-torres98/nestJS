import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductsService } from '../../products/services/products.service';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dtos';
import { Order } from '../entities/order.entity';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
	constructor(
		private productSrv: ProductsService,
		private apiKey: ConfigService
	) { }
	private counterId = 1;

	private users: User[] = [{
		id: 1,
		name: 'Brand 1',
		correo: 'example@gmail.com',
		phone: '999 999 999',
		address: 'Av. 1rt July',
	}];


	findAll() {
		const apiKey = this.apiKey.get('API_KEY')
		const dbName = this.apiKey.get('DATABASE_NAME')

		console.log(apiKey, dbName)
		return this.users;
	}

	findOne(id: number) {
		const user = this.users.find(resp => resp.id === id)

		if (!user) {
			throw new NotFoundException(`User ${id} not fount`)

		}
		return user;
	}

	create(payload: CreateUsersDto) {

		this.counterId++;

		const newUser = {
			id: this.counterId,
			...payload
		}

		this.users.push(newUser)
		return newUser
	}

	update(id: number, payload: UpdateUsersDto) {
		const user = this.findOne(id);

		if (user) {
			const index = this.users.findIndex(item => item.id === id);
			this.users[index] = {
				...user,
				...payload,
			}

			return this.users[index]
		}

		return null;

	}

	remove(id: number) {
		const index = this.users.findIndex(item => item.id === id)

		if (index === -1) {
			throw new NotFoundException(`User ${id} not fount`)
			return null;
		}

		this.users.splice(index, 1)
		return true
	}


	getOrdersByUser(id: number): Order {
		const user = this.findOne(id);

		return {
			date: new Date(),
			user,
			products: this.productSrv.findAll()
		}
	}

}
