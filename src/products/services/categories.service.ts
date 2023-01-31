import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriesDto, UpdateCategoryDto } from '../dtos/categories.dtos';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {

	private counterId = 1;

	private categories: Category[] = [{
		id: 1,
		name: 'Category 1',
		description: 'Description 1',

	}];


	findAll() {
		return this.categories;
	}

	findOne(id: number) {
		const product = this.categories.find(resp => resp.id === id)

		if (!product) {
			throw new NotFoundException(`Category ${id} not fount`)

		}
		return product;
	}

	create(payload: CreateCategoriesDto) {


		this.counterId++;

		const newCategory = {
			id: this.counterId,
			...payload
		}

		this.categories.push(newCategory)
		return newCategory
	}

	update(id: number, payload: UpdateCategoryDto) {
		const product = this.findOne(id);

		if (product) {
			const index = this.categories.findIndex(item => item.id === id);
			this.categories[index] = {
				...product,
				...payload,
			}

			return this.categories[index]
		}

		return null;

	}

	remove(id: number) {
		const index = this.categories.findIndex(item => item.id === id)

		if (index === -1) {
			throw new NotFoundException(`Category ${id} not fount`)
			return null;
		}

		this.categories.splice(index, 1)
		return true
	}




}
