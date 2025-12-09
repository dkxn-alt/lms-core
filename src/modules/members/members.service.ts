import { Injectable } from '@nestjs/common';
import { Prisma, members } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}
  async createMember(data: Prisma.membersCreateInput): Promise<members> {
    return this.prisma.members.create({
      data,
    });
  }
  async getMembers(): Promise<members[]> {
    return this.prisma.members.findMany();
  }
}
