import { NestFactory } from '@nestjs/core';
import { AccountsModule } from './accounts.module';
import { ConfigService } from '@nestjs/config';
import { corsConfig } from 'libs/common/src/config/cors.config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AccountsModule);
    app.enableCors(corsConfig);

    const configService = app.get(ConfigService);

    await app.listen(configService.get('PORT_ACCOUNTS_APP'));
  } catch (e) {
    console.log('e', e);
  }
}
bootstrap();
