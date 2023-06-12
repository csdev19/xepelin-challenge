import { NestFactory } from '@nestjs/core';
import { TransactionsModule } from './transactions.module';
import { ConfigService } from '@nestjs/config';
import { corsConfig } from 'libs/common/src/config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(TransactionsModule);
  app.enableCors(corsConfig);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT_TRANSACTION_APP'));
}
bootstrap();
