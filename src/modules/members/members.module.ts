import { Module } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { MembersController } from './members.controller.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Module({
  providers: [MembersService, PrismaService],
  controllers: [MembersController],
})
export class MembersModule {}
