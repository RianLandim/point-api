import { compareSync } from 'bcrypt';
import { randomUUID } from 'crypto';
import { User } from './user';

describe('User entity test', () => {
	it('Should be able to create an user', () => {
		const user = new User({
			enterpriseId: randomUUID(),
			name: 'test-name',
			password: 'test-password',
			username: 'test-username',
		});

		expect(user).toBeInstanceOf(User);
	});

	it('Should hash the user password', () => {
		const user = new User({
			enterpriseId: randomUUID(),
			name: 'test-name',
			password: 'test-password',
			username: 'test-username',
		});

		const isHashed = compareSync('test-password', user.password);

		expect(isHashed).toBeTruthy();
	});
});
