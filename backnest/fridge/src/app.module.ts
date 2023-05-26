import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from './log/log.module';
import { MemberModule } from './member/member.module';
import {config}from './orm.config'
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ApiModule,TypeOrmModule.forRoot(config), LogModule, MemberModule],
})
export class AppModule {}
