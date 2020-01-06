import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardInfo } from 'src/app/models/card-info';

const apiUrl = 'localhost:44300/api/';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCardInfos(): Observable<CardInfo[]> {
    return this.httpClient.get<CardInfo[]>(`${apiUrl}CardInfo`);
  }
}
