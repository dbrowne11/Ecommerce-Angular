import { Component } from '@angular/core';
import {IUser, User} from '../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPageComponent {
  userModel = new User(
  )
  submitted: boolean=false;
  alertType: string = "";
  message: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitHandler() {
    console.log('Submitting register')
    this.submitted=true;
    this.authService.register(this.userModel).subscribe((response: any) => {
      console.log(response)
      this.alertType = "alert alert-success"
      this.message = response.message
      this.router.navigateByUrl('login')
    }, (error: any) => {
      console.log(error)
      this.alertType = "alert alert-danger"
      this.message = error.error.message
      
    })
  }

}


