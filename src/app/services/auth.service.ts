import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_URL = 'http://localhost:8080/api/v1/auth'

  constructor(private http: HttpClient) { }

  register(data: any): Observable<string> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'json'
    }
    return this.http.post<any>(`${this.AUTH_URL}/register`, data, requestOptions)
  }

  login(data: any): Observable<any> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'json'
    }
    return this.http.post<any>(`${this.AUTH_URL}/login`, data, requestOptions)
  }

  logout() {
    localStorage.clear();
  }

  getToken(): boolean {
    if (localStorage.getItem('loginToken')) {
      return true;
    }
    return false;
  }
}
