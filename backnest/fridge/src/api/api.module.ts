import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Member } from './Member.entity';

@Module({
  //imports: [TypeOrmModule.forFeature([Member])],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
