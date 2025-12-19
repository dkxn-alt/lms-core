import { Module } from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { LoansController } from './loans.controller.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { MembersModule } from '../members/members.module.js';
import { BooksModule } from '../books/books.module.js';
// import { MembersService } from '../members/members.service.js';
// import { BooksService } from '../books/books.service.js';

@Module({
  imports: [MembersModule, BooksModule],
  providers: [LoansService, PrismaService],
  controllers: [LoansController],
})
export class LoansModule {}
