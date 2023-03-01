import { Employer } from '@app/entities/employer';
import { EmployerRepository } from '@app/repositories/employer-repository';

export class InMemoryEmployerRepository implements EmployerRepository {
	private employer: Employer[] = [];

	async create(employer: Employer): Promise<void> {
		this.employer.push(employer);
	}
}
