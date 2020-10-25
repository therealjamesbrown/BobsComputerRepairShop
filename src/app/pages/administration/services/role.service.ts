/**
 * 
 * ================================
 * ; Title: role.service.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for interfacing with our apis for the role-management
 *  component
 * ================================
 * 
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role.interface'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  //import http client
  constructor(private http: HttpClient) { }


  /**
   * 
   * Find All Roles
   * 
   */

   /**
   * 
   * Find Role By ID
   * 
   */

   /**
    * 
    * Create Role
    * 
    */

  /**
   * 
   * Update Role
   * 
   */

  /**
   * 
   * Delete Role
   * 
   */
}
