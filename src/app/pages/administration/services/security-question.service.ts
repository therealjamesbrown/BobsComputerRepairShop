/**
 * 
 * ================================
 * ; Title: security-question.service.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: Sarah Kovar
 * ; Date: 10/24/2020
 * ; Description: component responsible for interfacing with our apis for the security-question
 *  component
 * ================================
 * 
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityQuestion } from '../interfaces/security-question.interface';


@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {

  constructor(private http: HttpClient) { }

  
  /**
   * 
   * Find All Security Questions
   * 
   */
    findAllSecurityQuestions(): Observable<any> {
      return this.http.get(`/api/securityQuestions/`);
    }
   /**
   * 
   * Find Security Question by ID
   * 
   */

  findSecurityQuestionById(_id: string): Observable<any> {
    return this.http.get('/api/securityQuestions/' + _id);
  }
  

   /**
    * 
    * Create Security Question
    * 
    */


   createSecurityQuestion(newSecurityQuestion: SecurityQuestion): Observable<any> {
    return this.http.post('/api/securityQuestions/', {
      questionId: newSecurityQuestion.questionId
    })
  }

  /**
   * 
   * Update Security Question
   * 
   */

   updateSecurityQuestion(questionId: string, updatedSecurityQuestion: SecurityQuestion): Observable<any> {
   return this.http.put('/api/securityQuestions/'+ questionId, {
    questionId: updatedSecurityQuestion.questionId
    })
  }

  /**
   * 
   * Delete Security Question
   * 
   */

   deleteSecurityQuestion(questionId: string): Observable<any> {
     return this.http.patch('/api/securityQuestions/' + questionId, {
       //isDisabled: true
       questionId
     });
   }

}


