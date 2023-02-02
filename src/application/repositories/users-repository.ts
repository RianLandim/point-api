import { User as UserEntity } from '@app/entities/user';
import { User as PrismaUser } from '@prisma/client';

export abstract class UsersRepository {
	abstract create(user: UserEntity): Promise<void>;
	abstract save(user: UserEntity): Promise<void>;
	abstract findOne(userId: string): Promise<PrismaUser>;
}
