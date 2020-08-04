import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, LoginUser } from '../model/model';


const baseUrl = 'http://localhost:5000/api/User/';
const headers = new HttpHeaders();

@Injectable({
    providedIn: 'root'
})
export class UserSignService {

  constructor(private httpClient: HttpClient) { }


  saveUser(user: User): Observable<any> {

    return this.httpClient.post(baseUrl + 'SaveUser' , user , {headers});
  }


  checkUserIsExist(user: string): Observable<any> {
    const url = baseUrl;
    return this.httpClient.get(url + 'CheckUserIsExist?userName=' + user, {headers});
  }

  loginUser(loginUser: LoginUser): Observable<any> {

    return this.httpClient.post(baseUrl + 'Login' , loginUser , {headers});
  }



}