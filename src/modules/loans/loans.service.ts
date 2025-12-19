import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { Prisma, loans } from '../../generated/prisma/client.js';
import { AddLoanDto } from './dto/add-loans.dto.js';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}
  // TODO: getLoans
  async getLoans(): Promise<loans[]> {
    return this.prisma.loans.findMany();
  }

  // TODO: borrowBook
  async borrowBook(data: AddLoanDto): Promise<loans> {
    return this.prisma.loans.create({
      data: {
        members: { connect: { id: data.memberId } },
        books: { connect: { id: data.bookId } },
        // optional: borrowed_at: new Date(),
      },
    });
  }

  async returnBook() {}
  // TODO: returnBook
}
