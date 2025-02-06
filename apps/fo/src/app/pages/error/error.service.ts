import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  // TODO: if you to encapsulate the error, you can make it private
  error = new BehaviorSubject('No error');

  constructor() { }

  setError(message: string) {
    this.error.next(message);
  }
}
