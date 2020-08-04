import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrimValidator } from '../validator/trim-validator';
import { UserSignService } from '../service/user-sign.service';


@Component({
    selector: 'signIn-user',
    templateUrl: './signIn-user.component.html',
    styleUrls: ['./signIn-user.component.scss']
  })
  export class SignInUserComponent implements OnInit {

    signInFormGroup: FormGroup;
    isUsernameError: boolean;
    showButnName: boolean;


    constructor(private fb: FormBuilder , private router: Router, private userService: UserSignService) {

    }

    ngOnInit(): void {
        this.initialFormLoad();
        this.isUsernameError = false;
        this.showButnName = false;
    }

    initialFormLoad() {
        this.signInFormGroup = this.fb.group({
            userName: new FormControl('' , Validators.required),
        });
    }

    nextUserClick() {
        this.showButnName = true;
        if (!this.signInFormGroup.invalid) {
            const userName = this.signInFormGroup.controls.userName.value.trim();
            this.userService.checkUserIsExist(userName).subscribe(data => {
                if (data) {
                    this.router.navigateByUrl('/login-user', { state: userName });
                } else {
                    this.isUsernameError = true;
                    this.showButnName = false;
                }
        });
    } else {
        this.isUsernameError = true;
        this.showButnName = false;
    }
}

    createAccountClick(){
        this.router.navigate(['signup-form']);
    }
  }