import { Enterprise } from '@app/entities/enterprise';

export class PrismaEnterpriseMapper {
	static toPrisma(enterpise: Enterprise) {
		const { address, cnpj, createdAt, id, socialName, updatedAt } = enterpise;

		return {
			id,
			socialName,
			cnpj,
			address,
			createdAt,
			updatedAt,
		};
	}
}
