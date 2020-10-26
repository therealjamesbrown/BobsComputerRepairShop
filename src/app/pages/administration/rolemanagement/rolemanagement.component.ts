import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RoleService } from 'src/app/pages/administration/services/role.service';
import { Role } from '../interfaces/role.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { DeleteRecordDialogComponentComponent } from './delete-record-dialog-component/delete-record-dialog-component.component';

//todo create a taskDialogComponent


@Component({
  selector: 'app-rolemanagement',
  templateUrl: './rolemanagement.component.html',
  styleUrls: ['./rolemanagement.component.css']
})



export class RolemanagementComponent implements OnInit {
  roleDataSource: Role[];
  displayedColumns: string[] = ['role', 'status', 'action'];
  actions: string[] = ['update', 'disable'];

  constructor(private http: HttpClient, private dialog: MatDialog, private roleServce: RoleService) { 
    
    /**
      * Find All Roles
      */
     this.roleServce.findAllRoles().subscribe(res => {
       this.roleDataSource = res['data'];
       console.log(this.roleDataSource);
     }, err => {
       console.log(err);
     })
  }
  ngOnInit(): void {
  }

  /**
   * 
   * 
   * SECTION FOR ROLE API (create, update, delete)
   * You'll need to import http client and the related service
   */
 
   //createRoleDialog

   
   //editRoleDialog


   //deleteRoleDialog
  deleteRole(roleId){
     const dialogRef = this.dialog.open(DeleteRecordDialogComponentComponent, {
       data: {
         roleId,
         dialogHeader: 'Disabling Role',
         dialogBody: `Are you sure you want to disable role ${roleId}?`
       },
       disableClose: true,
       width: '800px'
     });

     dialogRef.afterClosed().subscribe(result => {
       if (result === 'confirm') {
         this.roleServce.deleteRole(roleId).subscribe(res => {
           console.log('Role successfully deleted')
           //make another call to update the list
           this.roleServce.findAllRoles().subscribe(res => {
            this.roleDataSource = res['data'];
            console.log(this.roleDataSource);
          }, err => {
            console.log(err);
          })
         })
       }
     })
  }


   
}
