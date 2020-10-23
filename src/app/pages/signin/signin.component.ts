/**
 * 
 * ================================
 * ; Title: signin.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for handling signin form
 * ================================
 * 
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]+$')])]
    });
  }

  signin(){
    const userName = this.form.controls.userName.value;
    const password = this.form.controls.password.value;

    console.log(userName);
    console.log(password);

    this.http.post('http://localhost:3000/api/session/signin', {
      userName,
      password
    }).subscribe(res => {
      console.log(res['data']);
      if (res['data'].userName){
        //user authenticated
        this.cookieService.set('sessionuser', res['data'].userName, 1);
        this.router.navigate(['/']);
      }
    }, err => {
      console.log(err);
      this.errorMessage = err.error.message;
    });
  }
}
