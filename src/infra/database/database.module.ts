import { AppointmentRepository } from '@app/repositories/appointment-repository';
import { EnterpriseRepository } from '@app/repositories/enterprise-repository';
import { UsersRepository } from '@app/repositories/users-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAppointmentRepository } from './prisma/repositories/prisma-appointment-repository';
import { PrismaEnterpiseRepository } from './prisma/repositories/prisma-enterprise-repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';

@Module({
	providers: [
		PrismaService,
		{ provide: UsersRepository, useClass: PrismaUserRepository },
		{ provide: EnterpriseRepository, useClass: PrismaEnterpiseRepository },
		{ provide: AppointmentRepository, useClass: PrismaAppointmentRepository },
	],
	exports: [UsersRepository, EnterpriseRepository, AppointmentRepository],
})
export class DatabaseModule {}
