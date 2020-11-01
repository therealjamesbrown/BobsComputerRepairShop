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


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-verify-username',
  templateUrl: './verify-username.component.html',
  styleUrls: ['./verify-username.component.css']
})
export class VerifyUsernameComponent implements OnInit {
  form: FormGroup;
  //errorMessage: string;
  //verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { 
  }
  
  ngOnInit() {

    this.form=this.fb.group({
      username: [null, Validators.compose([Validators.required])]
    });
  }

  validateUsername() {
    const username = this.form.controls['username'].value;

    this.http.get('/api/session/verify/users/' + username).subscribe (res => {
      console.log(res['data'].username);
      if (res) {
        this.router.navigate(['/session/verify-security-questions'], {queryParams: {username: username}, skipLocationChange: true});

      }
    }, err => {
      //this.errorMessage = 'Invalid username or password. Try again.';
      //this.openSnackBar(this.errorMessage);
      console.log(err);
    });
  }

  /*
    openSnackBar(errorMessage: string) {
      this._snackBar.open(errorMessage, 'Close', {
        duration: 7000,
        verticalPosition: 'top',
        panelClass: 'error'
      });
    
    }*/

}








