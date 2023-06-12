import { NestFactory } from '@nestjs/core';
import { AuthenticationModule } from './authentication.module';
import { ConfigService } from '@nestjs/config';
import { corsConfig } from 'libs/common/src/config/cors.config';
import { RmqService } from 'libs/common/src/rmq/rmq.service';
import { RmqOptions } from '@nestjs/microservices';
import { AUTHENTICATION_SERVICE } from 'libs/common/src/utils/queue.services';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AuthenticationModule);
    app.enableCors(corsConfig);

    const rmqService = app.get<RmqService>(RmqService);
    const configService = app.get(ConfigService);

    app.connectMicroservice<RmqOptions>(
      rmqService.getOptions(AUTHENTICATION_SERVICE, true),
    );
    await app.startAllMicroservices();
    await app.listen(configService.get('PORT_AUTHENTICATION_APP'));
  } catch (error) {
    console.log('error', error);
  }
}
bootstrap();
