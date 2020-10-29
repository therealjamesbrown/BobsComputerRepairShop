import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
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
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: new FormControl(null, Validators.required)
    })
    this.secondFormGroup = this.fb.group({
      secondCtrl: new FormControl(null, Validators.required)
    })
  }
  formSubmitOne() {
    let firstInput = this.firstFormGroup.get('fistCtrl').value
    console.log(firstInput)
  }
  formSubmitTwo() {
    let secondInput = this.secondFormGroup.get('secondCtrl').value
    console.log(secondInput)
  }
}
