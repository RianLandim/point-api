import { FindOneUser } from '@app/usecases/users/find-one-user-usecase';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from '../../../application/usecases/users/create-user-usecase';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../view-model/user-view-model';

@Controller('user')
export class UsersController {
	constructor(
		private createUser: CreateUser,
		private findOneUser: FindOneUser,
	) {}

	@Post()
	async create(@Body() body: CreateUserBody) {
		const { enterpriseId, name, password, username } = body;

		const { user } = await this.createUser.execute({
			enterpriseId,
			name,
			password,
			username,
		});

		return UserViewModel.toHttp(user);
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		const user = await this.findOneUser.execute(id);

		return UserViewModel.toHttp(user);
	}
}
