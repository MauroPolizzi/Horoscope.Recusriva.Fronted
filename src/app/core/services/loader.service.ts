import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  
  public loadingSubject = new BehaviorSubject<boolean>(false);
  private hideDelay = 2000; // tiempo en milisegundos (2 segundos)
  private requestCount = 0;

  show() {
    this.requestCount++;
    this.loadingSubject.next(true);
  }

  hide() {
    this.requestCount--;
    
    if(this.requestCount < 0){
      this.requestCount = 0;
    }

    if(this.requestCount === 0) {
      setTimeout( ()=> {
        if(this.requestCount === 0) {
          this.loadingSubject.next(false);
        }
      }, this.hideDelay);
    }
  }
}
