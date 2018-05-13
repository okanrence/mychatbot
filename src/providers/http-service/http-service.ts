import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }


  post(requestUrl: string): any {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer 28bed29f5b62412bbac420c11946cb0e');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(requestUrl, options).map(res => res.json());
    }
}
