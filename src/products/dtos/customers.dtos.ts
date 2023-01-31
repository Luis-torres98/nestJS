import { PartialType } from "@nestjs/mapped-types";
import { IsBtcAddress, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsPositive, IsString, IsUrl } from "class-validator";


export class CreateCustomersDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	@IsEmail()
	readonly correo: string;

	@IsNotEmpty()
	@IsPhoneNumber("CO")
	readonly phone: string;

	@IsNotEmpty()
	@IsString()
	readonly address: string;
}

// npm i @nestjs/mapped-types para ser una extension con cada campo opcional
export class UpdateCustomersDto extends PartialType(CreateCustomersDto) { }