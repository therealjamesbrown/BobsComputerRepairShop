import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RoleService } from 'src/app/pages/administration/services/role.service';
import { Role } from '../interfaces/role.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
//todo create a taskDialogComponent


@Component({
  selector: 'app-rolemanagement',
  templateUrl: './rolemanagement.component.html',
  styleUrls: ['./rolemanagement.component.css']
})




export class RolemanagementComponent implements OnInit {
  

  
roles: Role[];
displayedColumns: string[] = ['role', 'status', 'action'];
actions: string[] = ['update', 'disable'];

  constructor(private http: HttpClient, private dialog: MatDialog, private roleServce: RoleService) { 
    /**
      * Find All Roles
      */
     this.roleServce.findAllRoles().subscribe(res => {
       this.roles = res['data'];
       //console.log(this.roles);
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


   
}
