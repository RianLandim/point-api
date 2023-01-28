import { User } from '../entities/user';

export abstract class UsersRepository {
	abstract create(user: User): Promise<void>;
	abstract save(user: User): Promise<void>;
	abstract findOne(userId: string): Promise<User | null>;
}
