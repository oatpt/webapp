import { Injectable } from '@nestjs/common';
import { Member } from './Member.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ApiService {
    memberList:Member[]=[]
    add(name:string,role:string){
        const member=new Member();
        member.id=String(this.memberList.length==0?0:parseInt(this.memberList[this.memberList.length-1].id)+1);
        //member.id=uuid();
        member.name=name;
        member.role=role;
        this.memberList.push(member);
    }
    remove(id:string){
        this.memberList = this.memberList.filter((i)=>i.id!=id)
    }
    getmemberall(){
        return this.memberList;
    }
}
