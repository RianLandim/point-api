import { Appointment } from '@app/entities/appointment';
import { AppointmentRepository } from '@app/repositories/appointment-repository';

interface CreateAppointmentRequest {
	enterpriseId: string;
	userId: string;
}
export interface CreateAppointmentResponse {
	appointment: Appointment;
}

export class CreateAppointment {
	constructor(private appointmentRepository: AppointmentRepository) {}

	async execute(
		request: CreateAppointmentRequest,
	): Promise<CreateAppointmentResponse> {
		const { enterpriseId, userId } = request;

		const appointment = new Appointment({ enterpriseId, userId });

		await this.appointmentRepository.create(appointment);

		return {
			appointment,
		};
	}
}
