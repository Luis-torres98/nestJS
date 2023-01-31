import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';


@Module({
	imports: [
		HttpModule,
		UsersModule,
		ProductsModule,
		DatabaseModule,
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		})
	],
	controllers: [
		AppController,
	],
	providers: [
		AppService,
		{
			provide: 'TASKS',
			useFactory: async (http: HttpService) => {
				const tasks = await http
					.get('https://jsonplaceholder.typicode.com/todos',
						{
							headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
						}
					);
				const data = await (await firstValueFrom(tasks)).data;
				return data;
			},
			inject: [HttpService]
		}
	],
})
export class AppModule { }
