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
import { RoleService } from './services/role.service';
import { CookieService } from 'ngx-cookie-service';

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
  
  //Variable Declaration
  users: any
  userId: string;


  constructor(public dialog: MatDialog, private http: HttpClient, private roleService: RoleService, private cookieService: CookieService) { 

    /**All find all operations need to go here since 
       we are loading them each time the user visits the admin page.
    */

    /**
     * Find all Users
     */

     
     /**
     * Find all Security Questions
     */

     /**
      * Find All Roles
      */

      /**
       * 
       * Find all Catalog Items
       */

      /**
       * Find All purchases
       */
  }


  ngOnInit() {
    //Begin Brendans code
    this.http.get<any>('http://localhost:3000/api/users', httpOptions).subscribe(users => {
      this.users = users.data;
    })
    //end Brendans code
   }

   /**Begin Brendans code */
   post() {
     let postRef = this.dialog.open(PostDialogComponent)
   }
   update() {
    let putRef = this.dialog.open(PutDialogComponent)
   }
   delete() {
    let patchRef = this.dialog.open(PatchDialogComponent)
   }
   ///**End Brendans code */



   /**
    * 
    * SECITION FOR USER MANAGEMENT API CALLS
    * 
    */


    /**
    * 
    * SECITION FOR SECURITY QUESTION API CALLS
    * 
    */

  /**
   * 
   * 
   * SECTION FOR ROLE API
   * 
   */


  /**
   * 
   * SECTION FOR CATALOG APIS 
   * 
   * 
   */


  /**
   * 
   * SECTION FOR PURCHASES APIS
   * 
   */
  
}
