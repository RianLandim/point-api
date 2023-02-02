import { User as UserEntity } from '@app/entities/user';
import { User as PrismaUser } from '@prisma/client';

type User = UserEntity | PrismaUser;

export class UserViewModel {
	static toHttp(user: User) {
		return {
			id: user.id,
			name: user.name,
			username: user.username,
			enterpriseId: user.enterpriseId,
			createdAt: user.createdAt,
		};
	}
}
