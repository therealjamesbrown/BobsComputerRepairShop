import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-put-dialog',
  templateUrl: './put-dialog.component.html',
  styleUrls: ['./put-dialog.component.css']
})
export class PutDialogComponent implements OnInit {
  updateUserForm: FormGroup
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  ngOnInit() {
    this.updateUserForm = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password:  [null, Validators.compose([Validators.required])],
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])]
    })
  }
  updateUser() {
    let updateUserForm = {
      username: this.updateUserForm.get('username').value,
      password: this.updateUserForm.get('password').value,
      firstName: this.updateUserForm.get('firstName').value,
      lastName: this.updateUserForm.get('lastName').value,
      address: this.updateUserForm.get('address').value,
      email: this.updateUserForm.get('email').value,
      phoneNumber: this.updateUserForm.get('phoneNumber').value
    }
    // this.http.put('http://localhost:3000/api/users/:id', updatedUserForm, httpOptions).subscribe(err => {
      //if (err) console.log(err)
      //else console.log("UPDATE Success")
   //})
  }
}
