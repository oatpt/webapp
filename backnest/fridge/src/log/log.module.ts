import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/Log.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [TypeOrmModule.forFeature([Log]),ClientsModule.register([
    {
      name:'server',
      transport:Transport.MQTT,
      options:{
        url:'mqtt://167.71.205.31:1883'
      }
    }
  ])],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {}
