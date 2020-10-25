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
      return this.http.get('/api/security-questions');
    }
   /**
   * 
   * Find Security Question by ID
   * 
   */

  findSecurityQuestionById(questionId: string): Observable<any> {
    return this.http.get('/api/security-questions/' + questionId);
  }
  

   /**
    * 
    * Create Security Question
    * 
    */

//Sarah WIP
//   createSecurityQuestion(newSecurityQuestion: SecurityQuestion): Observable<any> {
//    return this.http.get('/api/security-questions', {
//      text: newSecurityQuestion.text
//    })
//  }

  /**
   * 
   * Update Security Question
   * 
   */
//Sarah WIP
//   updateSecurityQuestion(questionId: string, updatedSecurityQuestion: SecurityQuestion): Observable<any> {
//    return this.http.get('/api/security-questions/'+ questionId, {
//      text: updatedSecurityQuestion.text
//    })
//  }

  /**
   * 
   * Delete Security Question
   * 
   */

   deleteSecurityQuestion(questionId: string): Observable<any> {
     return this.http.delete('/api/security-questions/' + questionId);
   }

}

