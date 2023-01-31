import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";


export class CreateBrandsDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	readonly description: string;
}

// npm i @nestjs/mapped-types para ser una extension con cada campo opcional
export class UpdateBrandsDto extends PartialType(CreateBrandsDto) { }