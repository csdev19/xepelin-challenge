import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly client: Redis;

  constructor(private readonly configService: ConfigService) {
    this.client = new Redis({
      host: configService.get<string>('REDIS_HOST'),
      port: configService.get<number>('REDIS_PORT'),
    });
  }

  async set(key: string, payload: any, ttl?: number): Promise<void> {
    if (ttl) {
      await this.client.set(key, payload, 'EX', ttl);
    } else {
      await this.client.set(key, payload);
    }
  }

  async get(key: string): Promise<any> {
    return await this.client.get(key);
  }

  async delete(key: string): Promise<void> {
    await this.client.del(key);
  }
}
