import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { MembersService } from './modules/members/members.service.js';
// import { membersModel } from './generated/prisma/models.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly membersService: MembersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): object {
    return this.appService.getHealth();
  }
}
