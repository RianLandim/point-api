import { Enterprise } from '@app/entities/enterprise';
import { InMemoryEnterpriseRepository } from '@test/repositories/in-memory-enterpise-repository';
import { CreateEnterprise } from './create-enterprise-usecase';

describe('test-suite for create enterprise usecase', () => {
	it('should be able to create an enterprise', async () => {
		const inMemoryEnterpriseRepository = new InMemoryEnterpriseRepository();
		const createEnterprise = new CreateEnterprise(inMemoryEnterpriseRepository);

		const { enterprise } = await createEnterprise.execute({
			address: 'test-address',
			cnpj: 'test-cnpj',
			socialName: 'test-socialName',
		});

		expect(enterprise).toBeInstanceOf(Enterprise);
	});
});
