import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CurrentUser } from 'libs/common/src/utils/decorators/current-user.decorator';
import { Token } from 'libs/common/src/utils/interfaces/token.interface';
import { CreateTransactionRequest } from 'libs/common/src/database/models/dtos/transactions/create-transactions.request';
import { JwtAuthGuard } from 'libs/common/src/authentication/jwt-auth.guard';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  getHello(): string {
    return this.transactionsService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTransaction(@Body() payload: CreateTransactionRequest) {
    const transaction = await this.transactionsService.createTransaction(
      payload,
      payload.accountId,
    );
    return transaction.id;
  }
}
