import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

	// Categories
	@Get(':id/:product/:productId')
	getCategories(
		@Param('id') id: string | number,
		@Param('productId') productId: string | number
	) {
		return `Product con id: ${id} y producto : ${productId} `
	}


	@Get(':id')
	categoriy(@Param('id') categoryId: string | number) {
		return {
			message: `Category: ${categoryId} `
		}
	}


	@Post()
	create(@Body() payload: any) {
		return {
			message: 'accion de crear',
			payload
		}
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() payload: any) {
		return {
			id,
			payload
		}
	}


	@Delete(':id')
	delete(@Param('id') id: number) {
		return {
			id,
		}
	}
}
