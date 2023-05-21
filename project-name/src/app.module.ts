import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExModule } from './ex/ex.module';

@Module({
  imports: [ExModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
