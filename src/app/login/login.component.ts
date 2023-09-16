import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
  };

  showError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitHandler() {
    this.showError = false;
    this.authService
      .login(this.formData.username, this.formData.password)
      .then((value) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.showError = true;
      });
  }
}
