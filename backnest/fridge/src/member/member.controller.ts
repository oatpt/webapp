import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor(private memberService:MemberService){

    }
    @Get('/')
    getall(){
        return this.memberService.getall();
    }
    @Delete('/:address')
    async deletemember(@Param('address')address:number){
        console.log(`remove ${address}`);
        
        
        if (await this.memberService.remove(address)) throw new NotFoundException('not found address');
        const res=await this.memberService.getall();
        return res;
    }
    @Post('/')
    async addmember(@Body("address")address:number,@Body("name")name:string,@Body("role")role:string){
        if(!await this.memberService.add(address,name,role))
        {
           throw new NotFoundException("address already");
        }
        const res=await this.memberService.getall();
        return res;
    }
}
