import { User as UserEntity } from '@app/entities/user';
import { User as PrismaUser } from '@prisma/client';
import { UsersRepository } from '@app/repositories/users-repository';
import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UsersRepository {
	constructor(private prisma: PrismaService) {}

	async create(user: UserEntity): Promise<void> {
		const alreadyExists = await this.prisma.user.findUnique({
			where: { username: user.username },
		});

		if (alreadyExists) {
			throw new BadRequestException('Email já cadastrado');
		}

		const raw = PrismaUserMapper.toPrisma(user);

		await this.prisma.user.create({
			data: raw,
		});
	}

	async findOne(userId: string): Promise<PrismaUser> {
		const user = await this.prisma.user.findUnique({ where: { id: userId } });

		if (!user) {
			throw new NotFoundException('Nenhum usuário encontrado');
		}

		return user;
	}

	async save(user: UserEntity): Promise<void> {
		throw new Error('Method not yet implemented');
	}
}
