/**
 * 
 * ================================
 * ; Title: securityquestionmanagement.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/25/2020
 * ; Description: component responsible for admin security question page
 * ================================
 * 
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { SecurityQuestionService } from '../services/security-question.service';
import { SecurityQuestion } from '../interfaces/security-question.interface';

@Component({
  selector: 'app-securityquestionmanagement',
  templateUrl: './securityquestionmanagement.component.html',
  styleUrls: ['./securityquestionmanagement.component.css']
})
export class SecurityquestionmanagementComponent implements OnInit {

  securityQuestions: SecurityQuestion;
  questionId: string;
//  displayedColumns = ['question'];

  constructor(private http: HttpClient, private dialog: MatDialog, private SecurityQuestionService: SecurityQuestionService) { 
    /**
     * Find all Security Questions
     */

    this.SecurityQuestionService.findAllSecurityQuestions().subscribe(res => {
      this.securityQuestions = res['data'];
    }, err => {
      console.log(err);
    })

  }

  ngOnInit() {
  }

     /**
    * 
    * SECITION FOR SECURITY QUESTION API CALLS (create, update, delete)
    * You'll need to import http client and the related service
    */

}
