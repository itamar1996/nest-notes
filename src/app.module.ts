import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot( process.env.MONGO_URI),
    UserModule,
    NoteModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
