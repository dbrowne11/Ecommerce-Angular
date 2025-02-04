import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  submitted: boolean = false;
  message: string = "";
  alertType: string = "";
  loginForm = this.fb.group({
    emailOrUsername: [null, []],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get emailOrUsername() {
    return this.loginForm.get('emailOrUsername')
  }

  get password() {
    return this.loginForm.get('password')
  }

  onLoginHandler() {
    this.submitted = true;
    var loginDetails = {usernameOrEmail: this.loginForm.value.emailOrUsername, password: this.loginForm.value.password}
    // console.log(loginDetails)
    this.authService.login(loginDetails).subscribe((response: any) => {
      console.log(response)
      this.message = response.message
      localStorage.setItem('loginToken', response.token);
      this.alertType = "alert alert-success"
      this.router.navigateByUrl('home')
    }, (error: any) => {
      console.log(error)
      this.message = error.error.message
      this.alertType = "alert alert-danger"
    })
  }

}
