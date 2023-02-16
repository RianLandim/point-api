import { Appointment } from '@app/entities/appointment';
import { AppointmentRepository } from '@app/repositories/appointment-repository';
import { PrismaAppointmentMapper } from '../mappers/prisma.appointment-mapper';
import { PrismaService } from '../prisma.service';

export class PrismaAppointmentRepository implements AppointmentRepository {
	constructor(private prisma: PrismaService) {}

	async create(appointment: Appointment): Promise<void> {
		const raw = PrismaAppointmentMapper.toPrisma(appointment);

		await this.prisma.appointments.create({
			data: {
				...raw,
			},
		});
	}
}
