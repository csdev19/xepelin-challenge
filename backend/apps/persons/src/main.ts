import { NestFactory } from '@nestjs/core';
import { PersonsModule } from './persons.module';
import { ConfigService } from '@nestjs/config';
import { corsConfig } from 'libs/common/src/config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(PersonsModule);
  app.enableCors(corsConfig);
  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT_PERSONS_APP'));
}
bootstrap();
