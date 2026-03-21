import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = '/api/compte';

  constructor(private http: HttpClient) {}

  login(login: string, pass: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { login, pass }).pipe(
      tap(response => localStorage.setItem('token', response.token))
    );
  }

  register(login: string, pass: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { login, pass }).pipe(
      tap(token => localStorage.setItem('token', token))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
