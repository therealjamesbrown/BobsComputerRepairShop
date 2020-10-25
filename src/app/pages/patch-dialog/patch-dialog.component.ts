import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-patch-dialog',
  templateUrl: './patch-dialog.component.html',
  styleUrls: ['./patch-dialog.component.css']
})
export class PatchDialogComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() { }
  cancel() {

  }
  delete() {
    //this.http.delete('http://localhost:3000/api/users/:id', httpOptions).subscribe(err => {
  //  if (err) console.log(err)
    //  else console.log("DELETE Success")
    // }) 
  }
}
