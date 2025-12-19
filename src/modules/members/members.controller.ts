import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { membersModel } from 'src/generated/prisma/models.js';
import { AddMemberDto } from './dto/add-member.dto.js';
import { UpdateMemberDto } from './dto/update-member.dto.js';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}
  @Get()
  async getMembers(): Promise<membersModel[]> {
    return this.membersService.getMembers();
  }

  @Get(':id')
  async getMemberDetails(
    @Param('id') id: string,
  ): Promise<membersModel | null> {
    return this.membersService.getMemberDetails(id);
  }

  @Post()
  async createMember(@Body() memberData: AddMemberDto): Promise<membersModel> {
    return this.membersService.createMember(memberData);
  }

  @Patch(':id')
  async updateMember(
    @Param('id') id: string,
    @Body() memberData: UpdateMemberDto,
  ): Promise<membersModel> {
    return this.membersService.updateMember(id, memberData);
  }
}
