import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  name: string = '';
  constructor(private router: Router) {}

  login(username: string, password: string): Promise<boolean> {
    return new Promise((res, rej) => {
      if (username == 'admin' && password === 'admin') {
        this.isAuth = true;
        res(true);
      } else if (username == 'user' && password === 'user') {
        this.isAuth = true;
        res(true);
      } else {
        rej(false);
      }
      this.name = username;
    });
  }

  getName() {
    return this.name;
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
}
