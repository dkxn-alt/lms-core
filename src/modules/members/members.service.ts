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
  async updateMember(
    id: string,
    data: Prisma.membersUpdateInput,
  ): Promise<members> {
    return this.prisma.members.update({
      where: {
        id,
      },
      data,
    });
  }
  async getMembers(): Promise<members[]> {
    return this.prisma.members.findMany();
  }

  async getMemberDetails(id: string): Promise<members | null> {
    // mby possible use queryRaw?
    // return this.prisma.$queryRaw`SELECT * FROM members WHERE id = ${id}`;
    return this.prisma.members.findUnique({
      where: { id },
    });
  }
}
