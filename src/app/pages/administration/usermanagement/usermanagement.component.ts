import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog'
import { PostDialogComponent } from '../dialogs/user-admin-post-dialog/post-dialog.component'
import { PutDialogComponent } from '../dialogs/user-admin-put-dialog/put-dialog.component'
import { PatchDialogComponent } from '../dialogs/user-admin-patch-dialog/patch-dialog.component'
import { RoleService } from '../services/role.service';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UserManagementComponent implements OnInit {
  
  //Variable Declaration
  users: any


  constructor(public dialog: MatDialog, private http: HttpClient, private roleService: RoleService, private cookieService: CookieService) { }


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
  }