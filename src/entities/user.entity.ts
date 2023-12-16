import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attendance } from './attendance.entity';
import { FieldWork } from './field-work.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  name: string;

  @OneToMany(() => Attendance, (attendance) => attendance.user)
  attendances: Attendance[];

  @OneToMany(() => FieldWork, (FieldWork) => FieldWork.user)
  fieldWorks: FieldWork[];
}
