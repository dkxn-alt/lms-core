import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { loansModel } from 'src/generated/prisma/models.js';
import { AddLoanDto } from './dto/add-loans.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Get()
  async getLoans(): Promise<loansModel[]> {
    return this.loansService.getLoans();
  }

  @Post()
  async borrowBook(@Body() loansData: AddLoanDto): Promise<loansModel> {
    return this.loansService.borrowBook(loansData);
  }
}
