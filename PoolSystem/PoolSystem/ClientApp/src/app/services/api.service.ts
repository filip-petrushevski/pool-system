import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardInfo } from 'src/app/models/card-info';
import { CardInfosComponent } from '../components/card-infos/card-infos.component';

const apiUrl = 'localhost:44300/api/';
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
};

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCardInfos(): Observable<CardInfo[]> {
    return this.httpClient.get<CardInfo[]>(`${apiUrl}CardInfo`, httpOptions).pipe();
  }
}
