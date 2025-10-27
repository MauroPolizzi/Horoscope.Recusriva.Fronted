import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HoroscopeRequest } from '../models/horoscope-request.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase = 'http://localhost:5092/api/Horoscope/'

  constructor(private http: HttpClient) { }

  post<T>(path: string, body: HoroscopeRequest) {
    return this.http.post<T>(`${ this.urlBase }${ path }`, body);
  }

  get<T>(path: string) {
    return this.http.get<T>(`${ this.urlBase }${ path }`);
  }

  getHistory<T>(path: string) {
    return this.http.get<T>(`${ this.urlBase }${ path }`);
  }
}
