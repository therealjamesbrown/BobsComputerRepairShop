/**
 * 
 * ================================
 * ; Title: reset-password.service.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: Sarah Kovar
 * ; Date: 10/24/2020
 * ; Description: component responsible for interfacing with our apis for the reset password process
 * ================================
 * 
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  
  /**
   * 
   * Verify user by username
   * 
   */
    verifyUsername(): Observable<any> {
      return this.http.get(`/api/session/verify/users/` /*+ username*/ );
    }
   

  
   
    /**
   * 
   * Find an verify security questions by username
   * 
   */

  verifySecurityQuestions(_id: string): Observable<any> {
    return this.http.get('/api/securityQuestions/' + _id);
  }
  

 
  /**
   * 
   * Update Password by username
   * 
   */

   updateSecurityQuestion(_id: string, questionId: string, isDisabled: boolean): Observable<any> {
   return this.http.put('/api/securityQuestions/'+ _id, {
    questionId,
    isDisabled
    })
  }

}
