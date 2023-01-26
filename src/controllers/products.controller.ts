import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ProductsService } from "./../services/products.service";
@Controller('products')
export class ProductsController {

	constructor(
		private products: ProductsService
	) { }

	@Get()
	getProducts(
		@Query('limit') limit = 100,
		@Query('offset') offset = 0,
		@Query('brand') brand: string
	) {
		// const { limit, offset } = params
		// return {
		// 	message: `Products  limit=> ${limit} offset => ${offset} brand => ${brand}`
		// }
		return this.products.findAll()
	}

	@Get(':id')
	@HttpCode(HttpStatus.ACCEPTED)
	getOne(@Param('id', ParseIntPipe) productId: number) {
		// return {
		// 	message: `Product ${productId} `
		// }
		return this.products.findOne(productId)
	}


	@Post()
	create(@Body() payload: CreateProductDto) {
		// return {
		// 	message: 'accion de crear',
		// 	payload
		// }
		return this.products.create(payload)
	}

	@Put(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
		// return {
		// 	id,
		// 	payload
		// }

		this.products.update(id, payload);
	}


	@Delete(':id')
	delete(@Param('id') id: string) {
		// return {
		// 	id,
		// }
		return this.products.remove(+id)
	}






}
