/**
 * 
 * ================================
 * ; Title: reset-password.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/31/2020
 * ; Description: component for managing password reset
 * ================================
 * 
 */

import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ViewChild } from '@angular/core';
import { VerifySecurityQuestionsComponent } from '../verify-security-questions/verify-security-questions.component';
import { VerifyUsernameComponent } from '../verify-username/verify-username.component';  

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class ResetPasswordComponent implements OnInit {

   
   /*//begin add
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

  constructor() { }

  ngOnInit(): void {
  }

}
