import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorService } from "../pages/error/error.service";

const ALLOW = false;

export const SampleGuard = () => {
  console.debug('In SampleGuards function');
  if(!ALLOW) {
    // redirect to error page
    const errorService = inject(ErrorService);
    errorService.currentError = 'You are not allowed to access this page';
    const router = inject(Router);
    router.navigate(['/error']);
    return false;
  } else {
    return true;
  }
}
