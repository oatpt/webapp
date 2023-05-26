import { Injectable } from '@nestjs/common';
import { Log } from './entities/Log.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Logdto } from './dtos/log.dto';

@Injectable()
export class LogService {
    constructor(@InjectRepository(Log) private repository: Repository<Log>){}
    
    async add(address:number,time:number){
        const log = new Logdto();
        log.address=address;
        log.time=time
        console.log(log);
        await this.repository.save(log);
        
    }
    async remove(address:number){
        // const entities = await this.repository.find({
        //     where: {
        //         address: address
        //     }
        //   });
        // await this.repository.remove(entities);
    }
    getall(){
        return this.repository.find();
    }
}
