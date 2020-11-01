/**
 * 
 * ================================
 * ; Title: verify-security-questions.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/31/2020
 * ; Description: component for managing security question verification
 * ================================
 * 
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ViewChild } from '@angular/core';
import { VerifyUsernameComponent } from '../verify-username/verify-username.component';  //add
import { ResetPasswordComponent } from '../reset-password/reset-password.component'; //add

//import { SecurityQuestion } from '../../administration/interfaces/security-question.interface';
//import { SelectedSecurityQuestionSchema } from '../../../../../server/schemas/SelectedSecurityQuestionSchema';

import { Securityquestionpwdreset } from '../../../shared/securityquestionpwdreset.interface';

@Component({
  selector: 'app-verify-security-questions',
  templateUrl: './verify-security-questions.component.html',
  styleUrls: ['./verify-security-questions.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class VerifySecurityQuestionsComponent implements OnInit {

  securityQuestions: Securityquestionpwdreset[];
  question1: string;
  question2: string;
  question3: string;
  username: string;
  form2: FormGroup;

  /*
  //begin add
  @ViewChild(VerifyUsernameComponent) stepOneComponent: VerifyUsernameComponent;
  @ViewChild(VerifySecurityQuestionsComponent) stepTwoComponent: VerifySecurityQuestionsComponent;
  @ViewChild(ResetPasswordComponent) stepThreeComponent: ResetPasswordComponent;

  get frmStepOne() {
     return this.stepOneComponent ? this.stepOneComponent.frmStepOne : null;
  }

  get frmStepTwo() {
     return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo : null;
  }

  get frmStepThree() {
     return this.stepThreeComponent ? this.stepThreeComponent.frmStepThree : null;
  }
//end add
*/
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.username=this.route.snapshot.queryParamMap.get('username');
    console.log(this.username);

    this.http.get('api/users/' + this.username + '/security-questions').subscribe(res => {
      this.securityQuestions = res['data'];
      console.log(this.securityQuestions);
      console.log(res);
    }, err => {
      console.log(err);
    }, () => {
      this.question1 = this.securityQuestions[0].questionText;  
      this.question2 = this.securityQuestions[1].questionText;
      this.question3 = this.securityQuestions[2].questionText;


      console.log(this.question1);
      console.log(this.question2);
      console.log(this.question3);
    });
   }

  ngOnInit(): void {
    this.form2 = this.fb.group({
      answerToSecurityQuestion1: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion2: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion3: [null, Validators.compose([Validators.required])]
    });
  }

   verifySecurityQuestions() {
    const answerToSecurityQuestion1 = this.form2.controls['answerToSecurityQuestion1'].value;
    const answerToSecurityQuestion2 = this.form2.controls['answerToSecurityQuestion2'].value;
    const answerToSecurityQuestion3 = this.form2.controls['answerToSecurityQuestion3'].value;

    console.log(answerToSecurityQuestion1 + answerToSecurityQuestion2 + answerToSecurityQuestion3);

    this.http.post('/api/session/verify/users/' + this.username + '/security-questions', {
      questionText1: this.question1,
      questionText2: this.question2,
      questionText3: this.question3,
      answerText1: answerToSecurityQuestion1,
      answerText2: answerToSecurityQuestion2,
      answerText3: answerToSecurityQuestion3
    }).subscribe( res => {
      console.log(res);
      if(res['message'] === 'Success!') {
        this.router.navigate(['/session/reset-password', {queryParams: {isAuthenticated: 'true', username: this.username}, skipLocationChange: true}])
      } else {
        console.log('Unable to verify security question responses.')
      }
    })
  }
}












  


