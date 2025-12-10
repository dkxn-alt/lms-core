import { Injectable } from '@nestjs/common';
import { Prisma, books } from '../../generated/prisma/client.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { booksModel } from 'src/generated/prisma/models.js';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}
  async addBook(data: Prisma.booksCreateInput): Promise<books> {
    return this.prisma.books.create({
      data,
    });
  }

  async updateBook(id: string, data: Prisma.booksUpdateInput): Promise<books> {
    return this.prisma.books.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteBook(id: string): Promise<books> {
    return this.prisma.books.delete({
      where: {
        id,
      },
    });
  }

  async getBooks(): Promise<booksModel[]> {
    return this.prisma.books.findMany();
  }
}
