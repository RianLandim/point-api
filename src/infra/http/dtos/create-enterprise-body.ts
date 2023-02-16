import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEnterpriseBody {
	@IsNotEmpty()
	@IsString()
	socialName: string;

	@IsNotEmpty()
	@IsString()
	cnpj: string;

	@IsNotEmpty()
	@IsString()
	address: string;
}
