import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
    //id:number;
    @PrimaryGeneratedColumn('uuid')
    id:UUID; 
    @Column()
    address:number;
    @Column()
    time:number;
    
    
}