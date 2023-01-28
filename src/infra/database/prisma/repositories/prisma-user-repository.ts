import { User } from 'src/application/entities/user';
import { UsersRepository } from 'src/application/repositories/users-repository';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

export class PrismaUserRepository implements UsersRepository {
	constructor(private prisma: PrismaService) {}

	async create(user: User): Promise<void> {
		const raw = PrismaUserMapper.toPrisma(user);

		await this.prisma.user.create({
			data: raw,
		});
	}

	async findOne(userId: string): Promise<User | null> {
		throw new Error('Method not yet implemented');
	}

	async save(user: User): Promise<void> {
		throw new Error('Method not yet implemented');
	}
}
