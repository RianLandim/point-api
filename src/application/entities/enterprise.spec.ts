import { Enterprise } from './enterprise';

describe('Enterprise Entity', () => {
	it('should be able to create an enterprise entity', () => {
		const enterprise = new Enterprise({
			address: 'test-address',
			cnpj: 'test-cnpj',
			socialName: 'test-socialName',
		});

		expect(enterprise).toBeInstanceOf(Enterprise);
	});
});
