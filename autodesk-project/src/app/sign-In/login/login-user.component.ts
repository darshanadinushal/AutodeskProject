import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignService } from 'src/app/service/user-sign.service';
import { LoginUser } from 'src/app/model/model';


@Component({
    selector: 'login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.scss']
  })
  export class LoginComponent implements OnInit {

    loginFormGroup: FormGroup;
    isPasswordError: boolean;
    userName: any;
    loginUser: LoginUser;

    constructor(private fb: FormBuilder , private router: Router, private userService: UserSignService) {
        this.userName = this.router.getCurrentNavigation().extras.state;
    }

    ngOnInit(): void {
        this.initialFormLoad();

        if (!this.userName) {
            this.router.navigate(['']);
        }
    }

    initialFormLoad() {
        this.loginFormGroup = this.fb.group({
            password: new FormControl('' , [Validators.required]),
        });
    }

    passwordClick() {

        if (!this.loginFormGroup.invalid) {
            const password = this.loginFormGroup.controls.password.value.trim();

            this.loginUser ={
              password: password,
              userName: this.userName
            };
            this.userService.loginUser(this.loginUser).subscribe(data => {
                if (data) {
                    localStorage.setItem('userProfile', JSON.stringify(data));
                    this.router.navigate(['dashboard']);
                } else {
                    this.isPasswordError = true;
                }
        });
    } else {
        this.isPasswordError = true;
    }

    }

  }