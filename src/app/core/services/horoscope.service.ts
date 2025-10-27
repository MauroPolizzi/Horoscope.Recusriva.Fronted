import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HoroscopeRequest } from '../models/horoscope-request.model';
import { HoroscopeResponse } from '../models/horoscope-response.model';
import { HistoryItem } from '../models/history-item.model';
import { tap } from 'rxjs/operators';
import { StatisticsSignResponse } from '../models/statistics-sign-response.model';

@Injectable({ providedIn: 'root' })
export class HoroscopeService {
 
  private lastResponseSubject = new BehaviorSubject<HoroscopeResponse | null>(null);
  private lastResponseStatisticsSubject = new BehaviorSubject<StatisticsSignResponse[] | null>(null);
  private lastResponseHistorySubject = new BehaviorSubject<HistoryItem[] | null>(null);
  lastResponse$ = this.lastResponseSubject.asObservable();

  private historySubject = new BehaviorSubject<HistoryItem[]>([]);
  history$ = this.historySubject.asObservable();

  constructor(private api: ApiService) {}

  getHoroscope(payload: HoroscopeRequest): Observable<HoroscopeResponse> {
    return this.api.post<HoroscopeResponse>('gethoroscope', payload).pipe(
      tap(response => {
        this.lastResponseSubject.next(response);
      })
    );
  }

  getStatisticsSign(): Observable<StatisticsSignResponse[]>{
    return this.api.get<StatisticsSignResponse[]>('getstatistics').pipe(
      tap(response => {this.lastResponseStatisticsSubject.next(response)})
    );
  } 

  getHistory() {
    return this.api.getHistory<HistoryItem[]>('getall').pipe(
      tap(response => {this.lastResponseHistorySubject.next(response)})
    );
  }

  // getHistoryFromServer() {
  //   const fromStorage = localStorage.getItem('horoscope_history');
  //   const list: HistoryItem[] = fromStorage ? JSON.parse(fromStorage) : [];
  //   this.historySubject.next(list);
  //   return list;
  // }

  // private addToLocalHistory(item: HistoryItem) {
  //   const current = this.historySubject.value ?? [];
  //   const next = [item, ...current].slice(0, 100); // limitamos
  //   this.historySubject.next(next);
  //   localStorage.setItem('horoscope_history', JSON.stringify(next));
  // }
}
