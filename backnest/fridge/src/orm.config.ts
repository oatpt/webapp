import { TypeOrmModule } from '@nestjs/typeorm';
export const config:TypeOrmModule={
    type:'postgres',
    username:'postgres',
    password:'postgres',
    port:5433,
    host:'167.71.205.31',
    database:'fridge',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}'],
};