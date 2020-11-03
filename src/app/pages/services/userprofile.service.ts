/**
 * 
 * ================================
 * ; Title: userprofile.service.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: Sarah Kovar
 * ; Date: 10/24/2020
 * ; Description: service responsible for services that relate to the profile page
 * ================================
 * 
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * GET USER DETAILS
   * 
   */
  getUserDetails(username: string): Observable<any>{
    return this.http.get(`/api/users/username/${username}`);
  }



  /**
   * 
   * CHANGE PASSWORD
   * 
   */
   changeUserPassword(username: string, password:string): Observable<any>{
     return this.http.post(`/api/session/users/${username}/reset-password`,{
       password
     });
   }


   /**
    * 
    * GetAllSecurityQuestions
    * 
    */
   getAllSecurityQuestions(): Observable<any>{
     return this.http.get(`/api/securityQuestions`);
   }
   
  /**
   * 
   * CHANGE SECURITY QUESTIONS
   * 
   */
  updateUserSecurityQuestions(){

  }

  /**
   * 
   * CHANGE EMAIL
   * 
   */
updateUserEmail(){

}

  /**
   * 
   * CHANG ADDRESS
   * 
   */
  updateUserStreetAddress(){
    
  }

}