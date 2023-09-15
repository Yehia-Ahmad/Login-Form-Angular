import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="loginForm">
      <p [class]="alertStyle">* Email or Passward isn't valid</p>
      <h3>Login</h3>
      <label class="form_control">
        username
        <input
          type="text"
          name="username"
          [ngModel]="userName"
          (ngModelChange)="userName = $event"
        />
      </label>
      <label class="form_control">
        Passward
        <input
          type="password"
          name="password"
          [ngModel]="password"
          (ngModelChange)="password = $event"
        />
      </label>
      <button (click)="onSubmitHandler()">submit</button>
    </div>

    <div [class]="welcomePage">
      <h1>Welcome Back!</h1>
      <button (click)="logoutHandler()">Logout</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showAlertMassage: boolean = false;
  loginForm: string = 'form_container';
  welcomePage: string = 'welcome_page hidden';
  alertStyle: string = 'alert_Massage hidden';
  userName: string = '';
  password: string = '';
  displayUserName() {}
  resetInput() {
    this.userName = '';
    this.password = '';
  }
  loginHandler() {
    this.loginForm = 'form_container_hidden';
    this.welcomePage = 'welcome_page';
  }
  logoutHandler() {
    this.loginForm = 'form_container';
    this.welcomePage = 'welcome_page hidden';
  }
  showAlertMassageHandler() {
    if (!this.showAlertMassage) {
      this.alertStyle = 'alert_Massage';
    }
  }
  onSubmitHandler() {
    // e.preventDefault();
    if (this.userName === 'admin' && this.password === '1111') {
      console.log(true);
      this.resetInput();
      this.loginHandler();
    } else {
      this.resetInput();
      this.showAlertMassageHandler();
    }
  }
}
