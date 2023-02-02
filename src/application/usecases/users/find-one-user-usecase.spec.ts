import { User } from '@app/entities/user';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { randomUUID } from 'crypto';
import { CreateUser } from './create-user-usecase';
import { FindOneUser } from './find-one-user-usecase';

describe('find one user [use-case]', () => {
	const inMemoryUserRepository = new InMemoryUserRepository();
	const findOneUser = new FindOneUser(inMemoryUserRepository);

	it('should be able to find the user', async () => {
		const createUser = new CreateUser(inMemoryUserRepository);

		const { user } = await createUser.execute({
			enterpriseId: randomUUID(),
			name: 'test-name',
			password: 'test-password',
			username: 'test-username',
		});
		const userFind = await findOneUser.execute(user.id);

		expect(userFind).toBeInstanceOf(User);
	});

	it('should return an error for non user find', () => {
		expect(
			async () => await findOneUser.execute(randomUUID()),
		).rejects.toThrowError();
	});
});
