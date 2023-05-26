import { Bind, Body, Controller, Get, Post } from '@nestjs/common';
import { LogService } from './log.service';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';

@Controller('log')
export class LogController {
    constructor(private logService: LogService) {

    }
    @Get('/')
    getall() {
        return this.logService.getall();
    }
    
    @Bind(Payload(), Ctx())
    @MessagePattern('ESL/Fridge/log')
    async getNotifications(data, context) {
        console.log(`id: ${data['id']} date :${data['date']}`);
        await this.logService.add(data['id'], data['date']);
        const res = await this.logService.getall();
        return res;
    }

}

