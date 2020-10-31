/**
 * 
 * ================================
 * ; Title: verify-username.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/31/2020
 * ; Description: component for managing the verify username
 * ================================
 * 
 */

 //Begin Professor Krasso code

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-username',
  templateUrl: './verify-username.component.html',
  styleUrls: ['./verify-username.component.css']
})
export class VerifyUsernameComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { 
  }
  
  ngOnInit() {

    this.form=this.fb.group({
      username: [null, Validators.compose([Validators.required])]
    });
  }

  validateUsername() {
    const username = this.form.controls['username'].value;

    this.http.get('/api/session/verify/users/' + username).subscribe (res => {
      if (res) {
        this.router.navigate(['/api/session/verify-security-questions'], {queryParams: {username: username}, skipLocationChange: true});

      }
    }, err => {
      console.log(err);
    });
  }

}
//End Professor Krasso code









