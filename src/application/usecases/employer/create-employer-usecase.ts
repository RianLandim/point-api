import { Employer } from '@app/entities/employer';
import { EmployerRepository } from '@app/repositories/employer-repository';
import { Injectable } from '@nestjs/common';

interface EmployerRequestProps {
	name: string;
	jobDocument: string;
	cpf: string;
}
export interface EmployerResponseProps {
	employer: Employer;
}

@Injectable()
export class CreateEmployer {
	constructor(private employerRepository: EmployerRepository) {}

	async execute(request: EmployerRequestProps): Promise<EmployerResponseProps> {
		const { name, cpf, jobDocument } = request;

		const employer = new Employer({
			name,
			cpf,
			jobDocument,
		});

		await this.employerRepository.create(employer);

		return {
			employer,
		};
	}
}
