import { User } from '@app/entities/user';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import {
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { compareSync } from 'bcrypt';

@Injectable()
export class ValidateUser {
	constructor(private prisma: PrismaService) {}

	async execute(username: string, password: string) {
		const prismaUser = await this.prisma.user.findUnique({
			where: { username },
		});

		if (!prismaUser) {
			throw new NotFoundException('Usuário não cadastrado');
		}

		const isPasswordCorrect = compareSync(password, prismaUser.password);

		if (!isPasswordCorrect) {
			throw new UnauthorizedException('Usuário ou senha incorreta');
		}

		const user = new User({
			enterpriseId: prismaUser.enterpriseId,
			name: prismaUser.name,
			password: prismaUser.password,
			username: prismaUser.username,
			createdAt: prismaUser.createdAt,
			updatedAt: prismaUser.updatedAt,
		});

		return user;
	}
}
