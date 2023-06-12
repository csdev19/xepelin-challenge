import { NestFactory } from '@nestjs/core';
import { TransactionsModule } from './transactions.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(TransactionsModule);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT_TRANSACTION_APP'));
}
bootstrap();
