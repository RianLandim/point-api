import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';

@Module({
	imports: [DatabaseModule, HttpModule],
})
export class AppModule {}
