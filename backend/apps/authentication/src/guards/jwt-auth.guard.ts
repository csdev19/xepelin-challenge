import { AuthGuard } from '@nestjs/passport';

export default class JwtAuthModuleGuard extends AuthGuard('jwt') {}
