import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Welcome to Library Management System';
  }

  async getHealth(): Promise<object> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      console.log('Responding');
      return { statusCode: 200, status: 'ok' };
    } catch (error) {
      console.log('No response', error);
      return { statusCode: 500, status: 'error' };
    }
  }
}
