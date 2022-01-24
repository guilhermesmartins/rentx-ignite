import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn('uuid')
    private id: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;
}