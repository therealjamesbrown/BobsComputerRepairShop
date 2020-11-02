import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserprofileService } from '../../services/userprofile.service';
import { ChangePasswordComponent } from '../dialogs/change-password/change-password.component'

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private dialog: MatDialog, 
    private userProfileServce: UserprofileService ) { }

  ngOnInit(): void {
  }

  /**
   * 
   * Change Password
   * 
   */
  changeUserPassword(){
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      disableClose: true,
      width: "800px"
    })
  }


  /**
   * 
   * Change Security Questions
   * 
   */



  /**
   * 
   * Change Email
   * 
   */



  /**
   * 
   * Change Address
   * 
   */



}
