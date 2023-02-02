import { User } from 'src/application/entities/user';
import { UsersRepository } from 'src/application/repositories/users-repository';

export class InMemoryUserRepository implements UsersRepository {
	public users: User[] = [];

	async create(user: User): Promise<void> {
		const alreadyExists = this.users.find(
			(item) => item.username === user.username,
		);

		if (alreadyExists) {
			throw Error('Email já cadastrado');
		}

		this.users.push(user);
	}

	async save(user: User): Promise<void> {
		const userIndex = this.users.findIndex((item) => item.id === user.id);

		if (userIndex >= 0) {
			this.users[userIndex] = user;
		}
	}

	async findOne(userId: string): Promise<User> {
		const user = this.users.find((item) => item.id === userId);

		if (!user) {
			throw Error('Nenhum usuário cadastrado');
		}

		return user;
	}
}
