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

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      // 환경변수는 일반적으로 문자열로 구문 분석됨. TypeORM은 port 속성이 숫자일 것.
      // 또는 +process.env.DB_PORT 가능
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Attendance, FieldWork],
      synchronize: process.env.SYNC === 'dev' ? true : false,
      logging: true,
      autoLoadEntities: true,
    }),
    AttendancesModule,
    WorksModule,
    UsersModule,
  ],
  controllers: [AppController, AttendancesController, WorksController],
  providers: [AppService, AttendancesService, WorksService],
})
export class AppModule {}
