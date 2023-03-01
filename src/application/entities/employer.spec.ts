import { Employer } from './employer';

describe('employer entitie', () => {
	it('should be able to create an employer entitie', () => {
		const employer = new Employer({
			cpf: 'cpf-test',
			jobDocument: 'jobDocument-test',
			name: 'name-test',
		});

		expect(employer).toBeInstanceOf(Employer);
	});
});
