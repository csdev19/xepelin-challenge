import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CurrentUser } from 'libs/common/src/utils/decorators/current-user.decorator';
import { Token } from 'libs/common/src/utils/interfaces/token.interface';
import { Response } from 'express';
import { MessagePattern } from '@nestjs/microservices';
import { JwtAuthGuard } from 'libs/common/src/authentication/jwt-auth.guard';
import JwtAuthModuleGuard from './guards/jwt-auth.guard';
import { LoginRequest } from 'libs/common/src/database/models/dtos/authentication/login/login.request';
import { LoginMapper } from 'libs/common/src/database/models/mappers/login.mapper';
// import { LoginMapper } from 'libs/common/src/database/models/mappers/login.mapper';

@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(JwtAuthModuleGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: Token) {
    return user;
  }

  @Get()
  getStatus(): string {
    return `It's working!`;
  }

  @Post('test')
  @UseGuards(JwtAuthGuard)
  getTest(): string {
    return `It's working!`;
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('login')
  async login(
    @Body() { email, password }: LoginRequest,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authenticationService.validateUser(email, password);
    await this.authenticationService.login(user, response);
    response.send(LoginMapper.toClient(user));
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('logout')
  async logout(
    @Res({ passthrough: true }) response: Response,
    @CurrentUser() user: Token,
  ) {
    await this.authenticationService.logout(response, user);
    response.send({ message: 'ok' });
  }

  @HttpCode(HttpStatus.OK)
  @Post('generate-password')
  generatePassword(@Body() payload: any) {
    return this.authenticationService.generatePassword(payload);
  }
}
