import { IsNotEmpty } from 'class-validator';

export class CreateAppointmentBody {
	@IsNotEmpty()
	userId: string;

	@IsNotEmpty()
	enterpriseId: string;
}
