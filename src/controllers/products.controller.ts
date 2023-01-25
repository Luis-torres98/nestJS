import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {


	@Get()
	getProducts(
		@Query('limit') limit = 100,
		@Query('offset') offset = 0,
		@Query('brand') brand: string
	) {
		// const { limit, offset } = params
		return {

			message: `Products  limit=> ${limit} offset => ${offset} brand => ${brand}`
		}
	}

	@Get(':id')
	@HttpCode(HttpStatus.ACCEPTED)
	// getProduct(@Param() params: { id: any }) {
	getProduct(@Param('id') productId: string | number) {
		return {
			message: `Product ${productId} `
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
