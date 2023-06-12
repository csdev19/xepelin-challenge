import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { JwtAuthGuard } from 'libs/common/src/authentication/jwt-auth.guard';
import { CreateAccountRequest } from 'libs/common/src/database/models/dtos/accounts/create-account/create-account.request';
import { CurrentUser } from 'libs/common/src/utils/decorators/current-user.decorator';
import { Token } from 'libs/common/src/utils/interfaces/token.interface';
import { AccountEntity } from 'libs/common/src/database';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // @Get()
  // getHello(): string {
  //   return this.accountsService.getHello();
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAccounts(@CurrentUser() user: Token): Promise<AccountEntity[]> {
    return this.accountsService.getAccounts(user.payload.personId);
    console.log('⚡ ~ getAccounts ~ user:', user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createAccount(
    @Body() payload: CreateAccountRequest,
    @CurrentUser() user: Token,
  ) {
    const account = await this.accountsService.createAccount(
      payload,
      user.payload.personId,
    );
    return account;
  }
}
