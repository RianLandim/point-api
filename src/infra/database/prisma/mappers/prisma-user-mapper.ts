import { User } from 'src/application/entities/user';

export class PrismaUserMapper {
	static toPrisma(user: User) {
		const { username, password, name, enterpriseId } = user;

		return {
			username,
			password,
			enterpriseId,
			name,
		};
	}
}
