import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
    //id:number;
    @PrimaryGeneratedColumn('uuid')
    id:UUID;
    @Column()
    address:number;
    @Column({ length: 500 })
    name:string;
    @Column({ length: 500 })
    role:string;
}