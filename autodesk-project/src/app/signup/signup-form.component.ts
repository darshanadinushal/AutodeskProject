import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmFieldValidator } from '../validator/confirm-password-validator';
import { TrimValidator } from '../validator/trim-validator';
import { User } from '../model/model';
import { UserSignService } from '../service/user-sign.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.scss']
  })
  export class SignupFormComponent implements OnInit {

    signupFormGroup: FormGroup;
    user: User ;
    constructor(private fb: FormBuilder , private userSignService: UserSignService, private router: Router ,private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.initialFormLoad();
    }

    initialFormLoad() {
        this.signupFormGroup = this.fb.group({
            firstName: new FormControl('' , [Validators.required , TrimValidator]),
            lastName: new FormControl('' , [Validators.required , TrimValidator]),
            userName: new FormControl('' , [Validators.required , TrimValidator]),
            retypeUserName: new FormControl('' , [Validators.required , TrimValidator]),
            password: new FormControl('' ,[Validators.required , TrimValidator , 
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            retypePassword: new FormControl('' , [Validators.required , TrimValidator])
        }, {
            validator: ([ConfirmFieldValidator('password', 'retypePassword') , ConfirmFieldValidator('userName', 'retypeUserName')])
        });
    }

      saveUserClick() {
        if (!this.signupFormGroup.invalid) {
            this.user = {
                firstName: this.signupFormGroup.controls.firstName.value.trim(),
                lastName: this.signupFormGroup.controls.lastName.value.trim(),
                userName: this.signupFormGroup.controls.userName.value.trim(),
                password: this.signupFormGroup.controls.password.value.trim(),
                id : 0
              };
            this.userSignService.saveUser(this.user).subscribe(data => {
                if (data) {
                  this.toastr.info('Account created successfully');
                  this.router.navigate(['']);
                }
            });
        }

      }

      signInClick(){
        this.router.navigate(['']);
    }

}
