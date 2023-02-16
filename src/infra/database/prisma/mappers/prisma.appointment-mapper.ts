import { Appointment } from '@app/entities/appointment';

export class PrismaAppointmentMapper {
	static toPrisma(appointment: Appointment) {
		const { enterpriseId, id, userId, createdAt, updatedAt } = appointment;

		return {
			enterpriseId,
			id,
			userId,
			createdAt,
			updatedAt,
		};
	}
}
