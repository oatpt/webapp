import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/Member.entity';
import { Memberdto } from './dtos/member.dto';
@Injectable()
export class MemberService {
    constructor(@InjectRepository(Member) private repository: Repository<Member>){}
    
    async add(address:number,name:string,role:string):Promise<Boolean>{
        const entities = await this.repository.find({
            where: {
                address: address
            }
          });
          
        if(entities.length>0) return false;
        const member=new Memberdto();
        member.address=address
        member.name=name;
        member.role=role;
        await this.repository.save(member);
        return true
    }
    async remove(addressin:number){
        const entities = await this.repository.findOne({
            where: {
                address: addressin
            }
          });
          if(!entities) return true
          
        await this.repository.remove(entities);
        return false
    }
    getall(){
        return this.repository.find();
    }
}
