import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/pages/services/userprofile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, 
  MatSnackBarVerticalPosition 
 } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private userProfileServce: UserprofileService,
    private fb: FormBuilder, 
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: [null, Validators.compose([Validators.required])]
    });
  }

changePassword(){
  const username = this.cookieService.get('sessionuser');
  const password = this.form.controls.password.value;

  console.log(username);
  console.log(password);

  this.userProfileServce.changeUserPassword(username, password).subscribe(res =>{
    console.log(res)
  }, err => {
    console.log(err);
  })
}
}
