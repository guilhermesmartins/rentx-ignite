import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { v4 } from 'uuid';

import Category from './Category';
import { Specification } from './Specification';

@Entity('cars')
export default class Car {
  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column({ type: 'boolean' })
  avaiable = true;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  @ManyToMany(() => Specification)
  @JoinTable({
    name: 'specifications_cars',
    joinColumn: { name: 'car_id' },
    inverseJoinColumn: { name: 'specification_id' }
  })
  specifications: Specification[];

  @CreateDateColumn()
  created_at: Date;
}
