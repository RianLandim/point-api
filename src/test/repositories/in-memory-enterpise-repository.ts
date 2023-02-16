import { Enterprise } from '@app/entities/enterprise';
import { EnterpriseRepository } from '@app/repositories/enterprise-repository';

export class inMemoryEnterpriseRepository implements EnterpriseRepository {
	enterprise: Enterprise[] = [];

	async create(enterprise: Enterprise): Promise<void> {}
}
