import { CreateAppointment } from '@app/usecases/appointments/create-appointment-usecase';
import { Body, Controller, Get } from '@nestjs/common';
import { CreateAppointmentBody } from '../dtos/create-appointment-body';

@Controller('appointment')
export class AppointmentController {
	constructor(private createAppointment: CreateAppointment) {}

	@Get()
	create(@Body() request: CreateAppointmentBody) {
		return this.createAppointment.execute(request);
	}
}
