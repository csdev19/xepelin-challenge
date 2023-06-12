import { Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  getHello(): string {
    return this.transactionsService.getHello();
  }

  @Post()
  createTransaction() {}
}
