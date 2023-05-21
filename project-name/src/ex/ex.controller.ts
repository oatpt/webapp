import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExService } from './ex.service';
import Member from './Member';

@Controller('ex')
export class ExController {
    constructor(private readonly exService: ExService) {}
    @Get()
    get():string
    {
        return "hi"
    }
    @Get(':id')
    getid(@Param('id')id:string):Member
    {
        return this.exService.get(id);
    }
    @Post()
    add(@Body('name')name:string,@Body('id')id:string)
    {
        this.exService.add(name,id);
        return this.exService.show();
    }
    @Delete(':id')
    deleteid(@Param('id')id:string):Member[]
    {
        this.exService.delete(id);
        return this.exService.show();
    }
}
