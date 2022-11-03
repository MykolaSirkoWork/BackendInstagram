import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
    headers: {
      authorization: `Basic ${process.env.AUTH_TOKEN}`
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
