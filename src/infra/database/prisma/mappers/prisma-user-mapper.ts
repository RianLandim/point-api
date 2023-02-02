import { User } from 'src/application/entities/user';

export class PrismaUserMapper {
	static toPrisma(user: User) {
		const { username, password, name, enterpriseId, id, createdAt } = user;

		return {
			id,
			username,
			password,
			enterpriseId,
			name,
			createdAt,
		};
	}
}
