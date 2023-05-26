import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { identity } from 'rxjs';

@Controller('api')
export class ApiController {
    constructor(private apiService:ApiService){

    }
    @Get('/all')
    getall(){
        return this.apiService.getmemberall();
    }
    @Delete('/member/:id')
    deletemember(@Param('id')id:string){
        this.apiService.remove(id);
        const res=this.apiService.getmemberall();
        console.log(res);
        return res;
    }
    @Post('/member')
    async addmember(@Body("id")id:number,@Body("name")name:string,@Body("role")role:string){
        await this.apiService.add(id,name,role);
        const res=await this.apiService.getmemberall();
        console.log(res);
        return res;
    }
}
