import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { User } from './user.entity';

@Entity('attendance')
@Unique(['user', 'date'])
export class Attendance {
  @PrimaryGeneratedColumn()
  attendance_id: number;

  @ManyToOne(() => User, (user) => user.attendances, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'enum', enum: ['출근', '휴무', '당직'] })
  attendance_status: string;

  @Column({ type: 'boolean' })
  is_holiday: boolean;
}
