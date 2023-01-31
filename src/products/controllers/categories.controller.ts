import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateCategoriesDto, UpdateCategoryDto } from '../dtos/categories.dtos';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {

	constructor(
		private categoriesSrv: CategoriesService
	) { }

	// Categories
	// @Get(':id/:product/:productId')
	// getCategoriesProduct(
	// 	@Param('id') id: string | number,
	// 	@Param('productId') productId: string | number
	// ) {
	// 	return `Product con id: ${id} y producto : ${productId} `
	// }
	@Get('')
	getCategories() {
		return this.categoriesSrv.findAll()
	}

	@Get(':id')
	getOne(@Param('id', ParseIntPipe) categoryId: number) {
		return this.categoriesSrv.findOne(categoryId)
	}




	@Post()
	create(@Body() payload: CreateCategoriesDto) {
		return this.categoriesSrv.create(payload)
	}

	@Put(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDto) {
		return this.categoriesSrv.update(id, payload);
	}


	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.categoriesSrv.remove(id)
	}
}
