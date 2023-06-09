import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
[x: string]: any;
onLogin() {
throw new Error('Method not implemented.');
}

   loginForm!: FormGroup;
   constructor() { }

   ngOnInit() {
      this.loginForm = new FormGroup(
        {
          email : new FormControl('',[Validators.required,Validators.email]),
          password : new FormControl('',[Validators.required,Validators.minLength(8)])
        }
      );
   }
}
