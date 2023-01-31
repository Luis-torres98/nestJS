import { Module } from '@nestjs/common';
import { ProductsController } from "./controllers/products.controller";
import { CategoriesController } from "./controllers/categories.controller";
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrandsController } from './controllers/brands.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandsService } from './services/brands.service';
import { CustomersService } from './services/customers.service';

@Module({
	controllers: [
		ProductsController,
		CategoriesController,
		BrandsController,
		CustomersController
	],
	providers: [
		ProductsService,
		CategoriesService,
		BrandsService,
		CustomersService
	],
	exports: [
		ProductsService
	]
})
export class ProductsModule { }
