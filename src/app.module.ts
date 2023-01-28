import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/database.module';

@Module({
	imports: [PrismaModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
