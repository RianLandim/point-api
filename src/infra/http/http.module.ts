import { Login } from '@app/usecases/authentication/login-usecase';
import { ValidateUser } from '@app/usecases/authentication/validate-user-usecase';
import { CreateUser } from '@app/usecases/users/create-user-usecase';
import { FindOneUser } from '@app/usecases/users/find-one-user-usecase';
import { DatabaseModule } from '@infra/database/database.module';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './authentication/jwt.strategy';
import { AuthController } from './controller/auth.controller';
import { UsersController } from './controller/user.controller';

@Module({
	imports: [
		DatabaseModule,
		PassportModule,
		JwtModule.register({
			secret: 'test',
			signOptions: { expiresIn: '1d' },
		}),
	],
	controllers: [UsersController, AuthController],
	providers: [
		CreateUser,
		FindOneUser,
		ValidateUser,
		Login,
		JwtStrategy,
		PrismaService,
	],
	exports: [ValidateUser, Login],
})
export class HttpModule {}
