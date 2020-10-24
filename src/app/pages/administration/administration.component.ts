/**
 * 
 * ================================
 * ; Title: administration.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for administration page
 * ================================
 * 
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog'
import { PostDialogComponent } from '../post-dialog/post-dialog.component'
import { PutDialogComponent } from '../put-dialog/put-dialog.component'
import { PatchDialogComponent } from '../patch-dialog/patch-dialog.component'
import { Observable } from 'rxjs'

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  users: any
  constructor(public dialog: MatDialog, private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/users', httpOptions).subscribe(users => {
      this.users = users.data;
    })
   }
   post() {
     let postRef = this.dialog.open(PostDialogComponent)
   }
   update() {
    let putRef = this.dialog.open(PutDialogComponent)
   }
   delete() {
    let patchRef = this.dialog.open(PatchDialogComponent)
   }
}
