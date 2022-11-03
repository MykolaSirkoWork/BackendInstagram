import {Controller, Get, Query} from '@nestjs/common';
import {Observable} from "rxjs";

import { AppService } from './app.service';
import {ProfileInterface} from "./profile.interfaces";
import {InputDto} from "./input.dto";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProfile(@Query() {name}: InputDto): Observable<ProfileInterface> {
    return this.appService.getProfile(name);
  }
}
