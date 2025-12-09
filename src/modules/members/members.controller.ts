import { Controller, Get, Post, Body } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { membersModel } from 'src/generated/prisma/models.js';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}
  @Get()
  async getMembers(): Promise<membersModel[]> {
    return this.membersService.getMembers();
  }

  @Post()
  async createMember(
    @Body() memberData: { name: string; email: string },
  ): Promise<membersModel> {
    return this.membersService.createMember(memberData);
  }
}
