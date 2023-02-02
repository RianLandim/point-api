import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { User } from '../../entities/user';
import { CreateUser } from './create-user-usecase';
import { randomUUID } from 'crypto';

describe('create user [use-case]', () => {
	const inMemoryUserRepository = new InMemoryUserRepository();
	const createUser = new CreateUser(inMemoryUserRepository);

	it('should be able to create an user', async () => {
		const { user } = await createUser.execute({
			enterpriseId: randomUUID(),
			name: 'test-name',
			password: 'test-password',
			username: 'test-username',
		});

		expect(user).toBeInstanceOf(User);
	});

	it('should return an error for already exist email in database', async () => {
		expect(
			async () =>
				await createUser.execute({
					enterpriseId: randomUUID(),
					name: 'test-name',
					password: 'test-password',
					username: 'test-username',
				}),
		).rejects.toThrowError();
	});
});
