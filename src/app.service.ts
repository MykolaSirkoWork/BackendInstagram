import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {delay, map, Observable, switchMap} from "rxjs";

import {ProfileInterface} from "./profile.interfaces";
import {mapProfileFields} from "./profile.mapper";
import {
  dataRaw,
  firstDelay,
  firstLink,
  secondDelay,
  secondLink
} from "./constant";



@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getProfile(name: string): Observable<ProfileInterface> {
    return this.httpService.post(firstLink, dataRaw(name))
      .pipe(
        map(data => data.data.responseId),
        delay(firstDelay),
        switchMap(responseId => {
          return this.httpService.get(secondLink(responseId))
            .pipe(
              delay(secondDelay),
              map(res => {
                if(res.data.status === 'pending'){
                  return res.data.message
                }
                  console.log(res);
                  return mapProfileFields(res.data[0], res.data.slice(0,3))
              })
            )
        })
      )
  }
}
