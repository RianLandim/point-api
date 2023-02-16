import { CreateEnterprise } from '@app/usecases/enterprises/create-enterprise-usecase';
import { Controller, Post } from '@nestjs/common';
import { CreateEnterpriseBody } from '../dtos/create-enterprise-body';

@Controller()
export class EnterpriseController {
	constructor(private createEnterprise: CreateEnterprise) {}

	@Post()
	create(request: CreateEnterpriseBody) {
		return this.createEnterprise.execute(request);
	}
}
