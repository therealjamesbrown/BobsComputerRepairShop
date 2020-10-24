import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {
  createUserForm: any
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createUserForm = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])]
    })
  }
  createUser() {
    let newUser = {
      username: this.createUserForm.get('username').value,
      firstName: this.createUserForm.get('firstName').value,
      lastName: this.createUserForm.get('lastName').value,
      address: this.createUserForm.get('address').value,
      email: this.createUserForm.get('email').value,
      phoneNumber: this.createUserForm.get('phoneNumber').value
    }
    this.http.post('http://localhost:3000/api/users', newUser, httpOptions).subscribe(err => {
      if (err) console.log(err)
      else console.log("POST SUCCESS")
    }) 
    this.createUserForm.reset();
  }
  cancel() {

  }
}
