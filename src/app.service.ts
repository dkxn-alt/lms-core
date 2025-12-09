import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Welcome to Library Management System';
  }

  getHealth(): object {
    try {
      console.log('Responding');
      return { status: 200, message: 'ok' };
    } catch (error) {
      console.log('No response', error);
      return { status: 500, message: 'not ok' };
    }
  }
}
