import { Component, inject } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'fo-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  // DI with inject
  private errorService: ErrorService = inject(ErrorService);

  // DI with constructor
  // constructor(private errorService: ErrorService) { }

  // $ suffix => observable
  get error () {
    return this.errorService.currentError;
  }

}
