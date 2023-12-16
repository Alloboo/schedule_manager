import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FieldWork } from './entities/field-work.entity';
import { Attendance } from './entities/attendance.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendancesModule } from './tna/attendances.module';
import { WorksModule } from './works/works.module';
import { AttendancesController } from './tna/attendances.controller';
import { WorksController } from './works/works.controller';
import { AttendancesService } from './tna/attendances.service';
import { WorksService } from './works/works.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: 'root',
      database: 'schedule_manager',
      entities: [User, Attendance, FieldWork],
      synchronize: true, //프로덕션에서 쓰면 안 됨. 데이터 손실됨.
    }),
    AttendancesModule,
    WorksModule,
    UsersModule,
  ],
  controllers: [AppController, AttendancesController, WorksController],
  providers: [AppService, AttendancesService, WorksService],
})
export class AppModule {}
