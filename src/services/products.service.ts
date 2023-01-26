import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { Product } from "./../entities/product.entity";

@Injectable()
export class ProductsService {

	private counterId = 1;

	private products: Product[] = [{
		id: 1,
		name: 'Product 1',
		description: 'Description 1',
		price: 122,
		stock: 100,
		image: ''
	}];


	findAll() {
		return this.products;
	}

	findOne(id: number) {
		const product = this.products.find(resp => resp.id === id)

		if (!product) {
			throw new NotFoundException(`Product ${id} not fount`)

		}
		return product;
	}

	create(payload: CreateProductDto) {

		console.log(payload)

		this.counterId++;
		const newProduct = {
			id: this.counterId,
			...payload
		}

		this.products.push(newProduct)
		return newProduct
	}

	update(id: number, payload: UpdateProductDto) {
		const product = this.findOne(id);

		if (product) {
			const index = this.products.findIndex(item => item.id === id);
			this.products[index] = {
				...product,
				...payload,
			}

			return this.products[index]
		}

		return null;

	}

	remove(id: number) {
		const index = this.products.findIndex(item => item.id === id)

		if (index === -1) {
			throw new NotFoundException(`Product ${id} not fount`)
			return null;
		}

		this.products.splice(index, 1)
		return true
	}

}
