import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName: string = '';
  constructor(private authService: AuthService) {
    this.getNameHandler();
  }

  getNameHandler() {
    this.userName = this.authService.getName();
    return this.userName;
  }

  logoutHandler() {
    this.authService.logout();
  }
}
