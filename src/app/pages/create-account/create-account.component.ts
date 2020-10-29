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
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup
  newUser: any
  questions: any
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
      securityQuestion1: new FormControl(null, Validators.required),
      securityQuestion1Answer: new FormControl(null, Validators.required),
      securityQuestion2: new FormControl(null, Validators.required),
      securityQuestion2Answer: new FormControl(null, Validators.required),
      securityQuestion3: new FormControl(null, Validators.required),
      securityQuestion3Answer: new FormControl(null, Validators.required),
    })
    this.thirdFormGroup = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
    this.http.get('/api/securityQuestions').subscribe(res => {
      this.questions = res['data']
    })
  }
  registerAccount() {
    this.newUser = {
      username: this.firstFormGroup.get('username').value,
      password: this.firstFormGroup.get('password').value,
      firstName: this.firstFormGroup.get('firstName').value,
      lastName: this.firstFormGroup.get('lastName').value,
      phoneNumber: this.firstFormGroup.get('phoneNumber').value,
      address: this.firstFormGroup.get('address').value
    }
    this.http.post('/api/users', this.newUser).subscribe(err => {
      if (err) {
        console.log(err)
      } else {
        console.log(this.newUser)
      }
    })
    this.firstFormGroup.reset()
  }
  setSecurityQuestions() {
   let newSecurityQuestions = {
     securityQuestion1: this.secondFormGroup.get('securityQuestion1').value,
     secuirtyQuestion1Answer: this.secondFormGroup.get('securityQuestion1Answer').value,
     securityQuestion2: this.secondFormGroup.get('securityQuestion2').value,
     securityQuestion2Answer: this.secondFormGroup.get('securiyQuestion2Answer').value,
     securityQuestion3: this.secondFormGroup.get('securityQuestion2').value,
     secuirtyQuestion3Answer: this.secondFormGroup.get('secuirtyQuestionAnswer3').value
   }
   console.log(newSecurityQuestions)
  }
  signIn() {
   let signInUser = {
     username: this.thirdFormGroup.get('username').value,
     password: this.thirdFormGroup.get('password').value
   }
   this.http.post('/api/session/signin', signInUser).subscribe(res => {
    if (res['data'].username) {
      this.cookieService.set('sessionuser', res['data'].username, 1)
      this.router.navigate(['/'])
    }
   })
   this.secondFormGroup.reset()
  }
}