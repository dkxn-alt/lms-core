import { Module } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { BooksController } from './books.controller.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Module({
  providers: [BooksService, PrismaService],
  controllers: [BooksController],
})
export class BooksModule {}
