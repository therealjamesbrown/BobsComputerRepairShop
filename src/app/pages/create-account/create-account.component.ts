/**
 * 
 * ================================
 * ; Title: signin.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for handling signin form
 * ; Reference: Google Material Docs: https://material.angular.io/components/stepper/overview
 * ================================
 * 
 */
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class CreateAccountComponent implements OnInit {
  firstFormGroup: FormGroup
  secondFormGroup:FormGroup
  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient, private fb: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
    })
    this.secondFormGroup = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  registerAccount() {
    let newUser = {
      username: this.firstFormGroup.get('username').value,
      password: this.firstFormGroup.get('password').value,
      firstName: this.firstFormGroup.get('firstName').value,
      lastName: this.firstFormGroup.get('lastName').value,
      phoneNumber: this.firstFormGroup.get('phoneNumber').value,
      address: this.firstFormGroup.get('address').value
    }
    this.http.post('/api/users', newUser).subscribe(err => {
      if (err) {
        console.log(err)
      } else {
        console.log(newUser)
      }
    })
    this.firstFormGroup.reset()
  }
  signIn() {
   let signInUser = {
     username: this.secondFormGroup.get('username').value,
     password: this.secondFormGroup.get('password').value
   }
   this.http.post('session/signin', signInUser).subscribe(err => {
     if (err) {
       console.log(err)
     } else {
      this.cookieService.set('sessionuser', signInUser.username, 1)
       console.log(signInUser)
     }
   })
   this.secondFormGroup.reset()
  }
  go() {
    this.router.navigate(['/'])
  }
}