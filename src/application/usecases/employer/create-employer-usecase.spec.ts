import { Employer } from '@app/entities/employer';
import { InMemoryEmployerRepository } from '@test/repositories/in-memory-employer-repository';
import { CreateEmployer } from './create-employer-usecase';

describe('create employer use case', () => {
	it('should be able to create an employer and returns the same', async () => {
		const inMemoryEmployerRepository = new InMemoryEmployerRepository();
		const createEmployerUsecase = new CreateEmployer(
			inMemoryEmployerRepository,
		);

		const { employer } = await createEmployerUsecase.execute({
			name: 'test-name',
			jobDocument: 'test-jodDocument',
			cpf: 'test-cpf',
		});

		expect(employer).toBeInstanceOf(Employer);
	});
});
