import { randomUUID } from 'crypto';
import { Appointment } from './appointment';

describe('test suite for appointment entity', () => {
	it('should be able to create an appointment entity', () => {
		const appointment = new Appointment({
			enterpriseId: randomUUID(),
			userId: randomUUID(),
		});

		expect(appointment).toBeInstanceOf(Appointment);
	});
});
