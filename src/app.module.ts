import { Module } from '@nestjs/common';
import { PrismaModule } from './database/database.module';

@Module({
	imports: [PrismaModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
