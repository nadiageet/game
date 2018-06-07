import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {environment} from '../environments/environment';
import {delay, map, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchAll() : Observable<User[]>{
    return this.http.get<User[]>(`${environment.API_USERS}`).pipe(retry(3), delay(3000))
  }
}
