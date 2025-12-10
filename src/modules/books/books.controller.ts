import {
  Controller,
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { booksModel } from 'src/generated/prisma/models.js';
import { BooksService } from './books.service.js';
import { AddBookDto } from './dto/add-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';

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

  @Patch(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
