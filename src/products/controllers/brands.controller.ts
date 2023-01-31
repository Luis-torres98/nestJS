import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateBrandsDto, UpdateBrandsDto } from '../dtos/brands.dtos';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { BrandsService } from '../services/brands.service';

@Controller('brands')
export class BrandsController {

	constructor(
		private brandSrv: BrandsService
	) { }

	@Get()
	getBrands() {
		return this.brandSrv.findAll()
	}

	@Get(':id')
	getOne(@Param('id', ParseIntPipe) brandId: number) {
		return this.brandSrv.findOne(brandId)
	}


	@Post()
	create(@Body() payload: CreateBrandsDto) {
		return this.brandSrv.create(payload)
	}

	@Put(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandsDto) {
		this.brandSrv.update(id, payload);
	}

	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.brandSrv.remove(id)
	}

}
