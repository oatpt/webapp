import { Injectable, NotFoundException } from '@nestjs/common';
import Member from './Member';
import { NOTFOUND } from 'dns';

@Injectable()
export class ExService {

    listmember:Member[]=[];
    add(name:string,id:string){
        const member = new Member; 
        member.id=id;
        member.name=name;
        this.listmember.push(member);
    }
    show(){
        console.log(this.listmember);
        return this.listmember;
    }
    delete(id:string){
        this.listmember=this.listmember.filter(
            (x)=>x.id!==id)
    }
    get(id:string){
        const item=this.listmember.find(
            (x)=>x.id===id)
        console.log(item);
        if(item==undefined)
            throw new NotFoundException()
        else
            return item

    }
}
