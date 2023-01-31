import { Global, Module } from '@nestjs/common';
import { ProductsModule } from '../products/products.module';
import { ProductsService } from '../products/services/products.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
	controllers: [
		UsersController
	],
	providers: [
		UsersService,
	],
	imports: [ProductsModule]
})
export class UsersModule { }
