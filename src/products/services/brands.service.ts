import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandsDto, UpdateBrandsDto } from '../dtos/brands.dtos';
import { Brand } from '../entities/brands.entity';

@Injectable()
export class BrandsService {
	private counterId = 1;

	private brands: Brand[] = [{
		id: 1,
		name: 'Brand 1',
		description: 'Description 1',
	}];


	findAll() {
		return this.brands;
	}

	findOne(id: number) {
		const product = this.brands.find(resp => resp.id === id)

		if (!product) {
			throw new NotFoundException(`Brand ${id} not fount`)

		}
		return product;
	}

	create(payload: CreateBrandsDto) {

		this.counterId++;

		const newBrand = {
			id: this.counterId,
			...payload
		}

		this.brands.push(newBrand)
		return newBrand
	}

	update(id: number, payload: UpdateBrandsDto) {
		const brand = this.findOne(id);

		if (brand) {
			const index = this.brands.findIndex(item => item.id === id);
			this.brands[index] = {
				...brand,
				...payload,
			}

			return this.brands[index]
		}

		return null;

	}

	remove(id: number) {
		const index = this.brands.findIndex(item => item.id === id)

		if (index === -1) {
			throw new NotFoundException(`Brand ${id} not fount`)
			return null;
		}

		this.brands.splice(index, 1)
		return true
	}
}
