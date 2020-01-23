import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardInfo } from 'src/app/models/card-info';
import { User } from '../models/user';
import { Member } from '../models/member';

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

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`${apiUrl}members`, httpOptions);
  }

  addMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>(`${apiUrl}members`, member, httpOptions);
  }

  removeMember(id: number): Observable<Member> {
    return this.httpClient.delete<Member>(`${apiUrl}members/${id}`, httpOptions);
  }

  getMember(id: number): Observable<Member> {
    return this.httpClient.get<Member>(`${apiUrl}members/${id}`, httpOptions);
  }

  patchMember(id: number, member: any): Observable<Member> {
    return this.httpClient.patch<Member>(`${apiUrl}members/${id}`, member, httpOptions);
  }

  postVisit(visit: Visit): Observable<Visit> {
    return this.httpClient.post<Visit>(`${apiUrl}visits`, visit, httpOptions);
  }
}
