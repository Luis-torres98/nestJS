import { Global, Module } from '@nestjs/common';

const API_KEY = `123456123456`
const API_KEY_PROD = `55555555555`


@Global()
@Module({
	providers: [
		{
			provide: 'API_KEY',
			useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY
		},
	],
	exports: ['API_KEY']
})
export class DatabaseModule { }
