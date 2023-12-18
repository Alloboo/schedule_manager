import { Controller, Get, Post } from '@nestjs/common';

@Controller('Attendances')
export class AttendancesController {
  @Get()
  fildAll(): string {
    return 'This action returns all T&A';
  }

  @Post()
  create(): string {
    return 'This action adds a new T&A';
  }
}
