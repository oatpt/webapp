import { Module } from '@nestjs/common';
import { ExController } from './ex.controller';
import { ExService } from './ex.service';

@Module({
  controllers: [ExController],
  providers: [ExService]
})
export class ExModule {}
