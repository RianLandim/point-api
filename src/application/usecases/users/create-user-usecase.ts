import { Injectable } from '@nestjs/common';
import { User } from '../../../application/entities/user';
import { UsersRepository } from '../../../application/repositories/users-repository';

interface CreateUserRequest {
	username: string;
	password: string;
	name: string;
	enterpriseId: string;
}
interface CreateUserResponse {
	user: User;
}

@Injectable()
export class CreateUser {
	constructor(private usersRepository: UsersRepository) {}

	async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
		const { enterpriseId, name, password, username } = request;

		const user = new User({
			enterpriseId,
			name,
			password,
			username,
		});

		await this.usersRepository.create(user);

		return {
			user,
		};
	}
}
