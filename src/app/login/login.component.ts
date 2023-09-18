import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  showError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitHandler() {
    this.showError = false;
    console.log(this.formData);
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }

    this.authService
      .login(this.formData.value.username!, this.formData.value.password!)
      .then((value) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.showError = true;
      });
  }
}
