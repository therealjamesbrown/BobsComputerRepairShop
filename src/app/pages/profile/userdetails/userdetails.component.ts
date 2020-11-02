/**
 * 
 * ================================
 * ; Title: userdetails.service.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: Sarah Kovar
 * ; Date: 10/24/2020
 * ; Description: component responsible for populating the user details
 * ================================
 * 
 */


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { UserprofileService } from '../../services/userprofile.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  username: string = this.cookieService.get('sessionuser');
  userDetailsDataSource;


  constructor(
    private dialog: MatDialog, 
    private userProfileService: UserprofileService,
    private cookieService: CookieService) {

    /**
     * 
     * Pull in the user details
     * 
     */

     this.userProfileService.getUserDetails(this.username).subscribe(res => {
      this.userDetailsDataSource = res['data'];
      //console.log(this.userDetailsDataSource);
     })
   }



  ngOnInit(): void {
  }

}
