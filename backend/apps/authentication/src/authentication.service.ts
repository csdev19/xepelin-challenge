import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserSession } from './interfaces/user-sesion.interface';
import { v4 as uuidv4 } from 'uuid';
import { Token } from 'libs/common/src/utils/interfaces/token.interface';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'libs/common/src/redis/redis.service';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { Status } from 'libs/common/src/utils/enums/status.enum';
import { PersonEntity } from 'libs/common/src/database/models/entities/person.entity';
import { PersonRepository } from 'libs/common/src/database/models/repositories/person.repository';
import { LoginMapper } from 'libs/common/src/database/models/mappers/login.mapper';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly personRepository: PersonRepository,
  ) {}

  public async validateUser(_email: string, _password: string) {
    const person: PersonEntity = await this.validatePersonFromEmail(_email);

    if (!person) {
      throw new UnauthorizedException('Credentials invalid.');
    }

    if (person.status === Status.INACTIVE) {
      throw new ForbiddenException('Account disabled.');
    }

    const passwordIsValid = await bcrypt.compare(_password, person.password);

    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials invalid.');
    }

    return LoginMapper.toLoginMethod(person);
  }

  validateEmployeeFromEmail(_email: string): any {
    throw new Error('Method not implemented.');
  }

  public async login(user: UserSession, response: Response) {
    const expiresIn = this.configService.get<number>('jwt.expiresIn');
    console.log('--------------------------------------');
    console.log('⚡ ~ login ~ expiresIn:', expiresIn);
    const jwtid = `token:${uuidv4()}`;

    const payload: Token['payload'] = {
      personId: user._person.id,
      email: user._person.email,
    };

    const token = this.jwtService.sign(
      { payload },
      {
        expiresIn: `${expiresIn}s`,
        issuer: 'auth-login',
        jwtid,
      },
    );

    await this.redisService.set(jwtid, token, expiresIn);

    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + expiresIn / 1000);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  public async logout(response: Response, user: Token) {
    await this.redisService.delete(user.jti);

    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }

  public async generatePassword({ password }: { password: string }) {
    const saltRounds = this.configService.get<number>('saltRounds');
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  }

  private async validatePersonFromEmail(email: string): Promise<PersonEntity> {
    const employee: PersonEntity = await this.personRepository.getByEmail(
      email,
    );

    if (!employee) throw new UnauthorizedException('Invalid mail.');

    if (employee.status === Status.INACTIVE)
      throw new UnauthorizedException('Account disabled.');

    return employee;
  }
}
