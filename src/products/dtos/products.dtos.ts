import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";


export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	readonly description: string;

	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	readonly price: number;

	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	readonly stock: number;

	@IsUrl()
	@IsNotEmpty()
	readonly image: string;

}

// npm i @nestjs/mapped-types para ser una extension con cada campo opcional
export class UpdateProductDto extends PartialType(CreateProductDto) { }