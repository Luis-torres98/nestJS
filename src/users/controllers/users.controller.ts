import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateBrandsDto, UpdateBrandsDto } from '../../products/dtos/brands.dtos';
import { CreateProductDto, UpdateProductDto } from '../../products/dtos/products.dtos';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dtos';
import { BrandsService } from '../../products/services/brands.service';
import { UsersService } from '../services/users.service';


@Controller('users')
export class UsersController {

	constructor(
		private userSrv: UsersService
	) { }

	@Get()
	getBrands() {
		return this.userSrv.findAll()
	}

	@Get(':id')
	getOne(@Param('id', ParseIntPipe) brandId: number) {
		return this.userSrv.findOne(brandId)
	}

	@Get(':id/orders')
	getOrders(@Param('id', ParseIntPipe) userId: number) {
		return this.userSrv.getOrdersByUser(userId)
	}


	@Post()
	create(@Body() payload: CreateUsersDto) {
		return this.userSrv.create(payload)
	}

	@Put(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUsersDto) {
		this.userSrv.update(id, payload);
	}

	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.userSrv.remove(id)
	}

}
