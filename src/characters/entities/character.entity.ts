import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  abilities: string;

  @Column()
  image: string;
}
