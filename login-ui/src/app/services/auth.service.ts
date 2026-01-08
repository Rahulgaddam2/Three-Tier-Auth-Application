import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  signup(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, {
      username,
      password
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {
      username,
      password
    });
  }
}
