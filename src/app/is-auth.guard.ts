import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (authService.isAuth) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
