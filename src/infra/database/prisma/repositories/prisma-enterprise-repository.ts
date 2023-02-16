import { Enterprise } from '@app/entities/enterprise';
import { EnterpriseRepository } from '@app/repositories/enterprise-repository';
import { PrismaEnterpriseMapper } from '../mappers/prisma-enterpise-mapper';
import { PrismaService } from '../prisma.service';

export class PrismaEnterpiseRepository implements EnterpriseRepository {
	constructor(private prisma: PrismaService) {}

	async create(enterprise: Enterprise): Promise<void> {
		const raw = PrismaEnterpriseMapper.toPrisma(enterprise);

		await this.prisma.enterprise.create({
			data: {
				...raw,
			},
		});
	}
}
