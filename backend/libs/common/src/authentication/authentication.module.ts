import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { RmqModule } from '../rmq/rmq.module';
import { AUTHENTICATION_SERVICE } from '../utils/queue.services';

@Module({
  imports: [RmqModule.register({ name: AUTHENTICATION_SERVICE })],
  exports: [RmqModule],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
