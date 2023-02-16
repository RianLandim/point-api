import { Appointment } from '@app/entities/appointment';
import { AppointmentRepository } from '@app/repositories/appointment-repository';

export class InMemoryAppointmentRepository implements AppointmentRepository {
	appointment: Appointment[] = [];

	async create(appointment: Appointment): Promise<void> {
		this.appointment.push(appointment);
	}
}
