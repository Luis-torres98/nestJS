import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
	transform(value: string, metadata: ArgumentMetadata) {
		const val = parseInt(value, 10)

		if (isNaN(val)) {
			throw new BadRequestException('Ojo que no me pasas lo que necesito 🙄');
		}

		return val;
	}
}
