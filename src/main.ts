import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  require('dotenv').config();
  app.use(cookieParser())
  await app.listen(process.env.PORT);
  console.log("app listen to port 3000");
  console.log('MONGO_URI:', process.env.MONGO_URI);

  
}
bootstrap();
