import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  // error is a private(like POO encapsulation)
  private error = new BehaviorSubject('No error');

  constructor() { }

  // TS getter
  get currentError() {
    return this.error.value;
  }

  // TS setter
  set currentError(message: string) {
    this.error.next(message);
  }
}
