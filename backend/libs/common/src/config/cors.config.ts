import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsConfig: CorsOptions = {
  // origin: '*',
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT'],
  // allowedHeaders: '*',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'Origin',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Origin',
  ],
  credentials: true,
};

export { corsConfig };
