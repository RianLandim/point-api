import { Login } from '@app/usecases/authentication/login-usecase';
import { ValidateUser } from '@app/usecases/authentication/validate-user-usecase';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginBody } from '../dtos/login-body';

@Controller('auth')
export class AuthController {
	constructor(
		private loginService: Login,
		private validateUser: ValidateUser,
	) {}

	@Post('login')
	async login(@Body() credentials: LoginBody) {
		const { username, password } = credentials;
		const user = await this.validateUser.execute(username, password);

		return this.loginService.execute(user);
	}
}
