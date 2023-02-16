import { Enterprise } from '@app/entities/enterprise';
import { EnterpriseRepository } from '@app/repositories/enterprise-repository';
import { Injectable } from '@nestjs/common';

interface CreateEnterpiseRequest {
	socialName: string;
	cnpj: string;
	address: string;
}
export interface CreateEnterpiseResponse {
	enterprise: Enterprise;
}

@Injectable()
export class CreateEnterprise {
	constructor(private enterpriseRepository: EnterpriseRepository) {}

	async execute(
		request: CreateEnterpiseRequest,
	): Promise<CreateEnterpiseResponse> {
		const { address, cnpj, socialName } = request;

		const enterprise = new Enterprise({ address, cnpj, socialName });

		await this.enterpriseRepository.create(enterprise);

		return {
			enterprise,
		};
	}
}
