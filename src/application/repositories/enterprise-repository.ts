import { Enterprise } from '@app/entities/enterprise';

export abstract class EnterpriseRepository {
	abstract create(enterprise: Enterprise): Promise<void>;
}
