import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
    constructor(private apiService:ApiService){

    }
    @Get('/all')
    getall(){
        return [1,2,3]
    }
    @Delete('/member/:id')
    deletemember(@Param('id')id:string){
        this.apiService.remove(id);
        const res=this.apiService.getmemberall();
        console.log(res);
        return res;
    }
    @Post('/member')
    addmember(@Body("name")name:string,@Body("role")role:string){
        this.apiService.add(name,role);
        const res=this.apiService.getmemberall();
        console.log(res);
        return res;
    }
}
