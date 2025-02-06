import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorService } from "../pages/error/error.service";

const ALLOW = false;
enum DISPLAY_ERROR_MODE {
  DYNAMIC = 0,
  REDIRECT = 1
}
const DISPLAY_ERROR = DISPLAY_ERROR_MODE.DYNAMIC;

export const SampleGuard = () => {
  console.debug('In SampleGuards function');
  if(!ALLOW) {
    // redirect to error page
    const errorService = inject(ErrorService);
    errorService.currentError = 'You are not allowed to access this page';
    if(DISPLAY_ERROR === DISPLAY_ERROR_MODE.DYNAMIC) {
      errorService.displayCurrentError();
    } else {
      const router = inject(Router);
      router.navigate(['/error']);
    }
    return false;
  } else {
    return true;
  }
}
