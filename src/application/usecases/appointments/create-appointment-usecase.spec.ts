import { Appointment } from '@app/entities/appointment';
import { InMemoryAppointmentRepository } from '@test/repositories/in-memory-appointment-repository';
import { randomUUID } from 'crypto';
import { CreateAppointment } from './create-appointment-usecase';

describe('', () => {
	it('should be able to create an appointment', async () => {
		const inMemoryAppointmentRepository = new InMemoryAppointmentRepository();
		const createAppointment = new CreateAppointment(
			inMemoryAppointmentRepository,
		);

		const { appointment } = await createAppointment.execute({
			enterpriseId: randomUUID(),
			userId: randomUUID(),
		});

		expect(appointment).toBeInstanceOf(Appointment);
	});
});
