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
import { PostDialogComponent } from '../administration/dialogs/user-admin-post-dialog/post-dialog.component'
import { PutDialogComponent } from '../administration/dialogs/user-admin-put-dialog/put-dialog.component'
import { PatchDialogComponent } from '../administration/dialogs/user-admin-patch-dialog/patch-dialog.component'
import { RoleService } from './services/role.service';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})


export class AdministrationComponent implements OnInit {
  
  //Variable Declaration
  users: any


  constructor(public dialog: MatDialog, private http: HttpClient, private roleService: RoleService, private cookieService: CookieService) { 

   
  }


  ngOnInit() {
    //Begin Brendans code
    this.http.get('http://localhost:3000/api/users', httpOptions).subscribe(data => {
      this.users = data['data'];
    })
    //end Brendans code
   }

   /**Begin Brendans code */
   post() {
     this.dialog.open(PostDialogComponent)
   }
   update(user) {
    this.cookieService.set('updateId', user._id)
    this.dialog.open(PutDialogComponent)
   }
   delete(user) {
    this.cookieService.set('deleteId', user._id)
    this.dialog.open(PatchDialogComponent)
   }
   ///**End Brendans code */


  
}
