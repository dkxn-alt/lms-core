import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './modules/books/books.module.js';
import { MembersModule } from './modules/members/members.module.js';
import { LoansModule } from './modules/loans/loans.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { PrismaService } from './prisma/prisma.service.js';
import { ConfigModule } from '@nestjs/config';
import { MembersService } from './modules/members/members.service.js';
import { LoansService } from './modules/loans/loans.service.js';
import { BooksService } from './modules/books/books.service.js';

@Module({
  imports: [
    BooksModule,
    MembersModule,
    LoansModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    MembersService,
    LoansService,
    BooksService,
  ],
})
export class AppModule {}
