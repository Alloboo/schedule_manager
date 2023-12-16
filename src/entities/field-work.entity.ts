import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('field_work')
export class FieldWork {
  @PrimaryGeneratedColumn()
  field_work_id: number;

  @ManyToOne(() => User, (user) => user.fieldWorks, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  title: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;

  @Column({ length: 255 })
  location: string;

  @Column({ type: 'text', nullable: true })
  details: string;
}
