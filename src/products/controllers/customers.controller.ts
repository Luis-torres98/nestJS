import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateCustomersDto, UpdateCustomersDto } from '../dtos/customers.dtos';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {

	constructor(
		private customerSrv: CustomersService
	) { }

	@Get()
	getBrands() {
		return this.customerSrv.findAll()
	}

	@Get(':id')
	getOne(@Param('id', ParseIntPipe) brandId: number) {
		return this.customerSrv.findOne(brandId)
	}


	@Post()
	create(@Body() payload: CreateCustomersDto) {
		return this.customerSrv.create(payload)
	}

	@Put(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomersDto) {
		this.customerSrv.update(id, payload);
	}

	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.customerSrv.remove(id)
	}

}
