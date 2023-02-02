import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginBody {
	@IsEmail()
	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	@Length(8)
	password: string;
}
