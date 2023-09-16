import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  constructor(private router: Router) {}

  login(username: string, password: string): Promise<boolean> {
    return new Promise((res, rej) => {
      if (username == 'admin' && password === '1111') {
        this.isAuth = true;
        res(true);
      } else {
        rej(false);
      }
    });
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
}
