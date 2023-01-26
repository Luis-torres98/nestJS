import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe({
		// No permite campos no declarados en el DTO
		whitelist: true,
		// Alerta de la falla 🫠
		forbidNonWhitelisted: true
	}))
	await app.listen(3000);
}
bootstrap();
