import { Employer } from '@app/entities/employer';

export abstract class EmployerRepository {
	abstract create(employer: Employer): Promise<void>;
}
