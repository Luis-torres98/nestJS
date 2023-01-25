import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	// NOTE: Rutas fijas primero, luego dinamicas

	@Get()
	getHello(): string {
		return 'Hola Pa';
	}

	@Get('nuevo')
	newEndpoint() {
		return 'Soy nuevo'
	}
	@Get('/ruta/')
	hello() {
		return 'Soy hello'
	}




}
