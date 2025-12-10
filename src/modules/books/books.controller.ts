import { Controller, Get, Body, Post } from '@nestjs/common';
import { booksModel } from 'src/generated/prisma/models.js';
import { BooksService } from './books.service.js';
import { AddBookDto } from './dto/add-book.dto.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getBooks(): Promise<booksModel[]> {
    return this.booksService.getBooks();
  }

  @Post()
  async addBook(@Body() addBookDto: AddBookDto) {
    return this.booksService.addBook(addBookDto);
  }
}
