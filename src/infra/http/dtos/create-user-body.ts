import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserBody {
	@IsEmail()
	@IsNotEmpty()
	username: string;

	@IsString()
	@IsNotEmpty()
	password: string;

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	enterpriseId: string;
}
