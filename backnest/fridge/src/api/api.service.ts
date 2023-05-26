import { Injectable } from '@nestjs/common';
//import { Member } from './Member.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ApiService {
    //constructor(@InjectRepository(Member) private repository: Repository<Member>){}
    
    async add(id:number,name:string,role:string){
        //const member=new Member();
        //member.adderss=id
        // //member.id=uuid();
        //member.name=name;
        //member.role=role;
        //console.log(member);
        //console.log(await this.repository.save(member));
         
        
        

        // this.memberList.push(member);
    }
    remove(id:string){
        //return this.memberList = this.memberList.filter((i)=>i.id!=id)
    }
    getmemberall(){
        //return this.repository.find();
    }
}
