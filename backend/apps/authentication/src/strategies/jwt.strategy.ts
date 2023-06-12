import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { RedisService } from 'libs/common/src/redis/redis.service';
import { Token } from 'libs/common/src/utils/interfaces/token.interface';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly redisService: RedisService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.Authentication;
        },
      ]),
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate(token: Token) {
    try {
      await this.validateCache(token.jti);
      return token;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  private async validateCache(jti: string) {
    const token = await this.redisService.get(jti);
    if (!token) throw new UnauthorizedException();
  }
}
