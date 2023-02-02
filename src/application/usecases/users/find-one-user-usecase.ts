import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneUser {
	constructor(private userRepository: UsersRepository) {}

	async execute(id: string) {
		const user = await this.userRepository.findOne(id);

		return user;
	}
}
