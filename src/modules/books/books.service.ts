import { Injectable } from '@nestjs/common';
import { Prisma, books } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}
  async addBook(data: Prisma.booksCreateInput): Promise<books> {
    return this.prisma.books.create({
      data,
    });
  }
}
