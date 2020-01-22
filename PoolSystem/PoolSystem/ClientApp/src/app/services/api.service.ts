import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardInfo } from 'src/app/models/card-info';
import { User } from '../models/user';

const apiUrl = 'https://localhost:44300/api/';
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
};

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCardInfos(): Observable<CardInfo[]> {
    return this.httpClient.get<CardInfo[]>(`${apiUrl}cardinfo`, httpOptions);
  }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>(`https://localhost:44300/users/authenticate`, user, httpOptions);
  }
}
