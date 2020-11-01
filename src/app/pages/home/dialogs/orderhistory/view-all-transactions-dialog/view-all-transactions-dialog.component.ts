/**
 * 
 * ================================
 * ; Title: viewAllTranrsactions.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for displaying all transactions (archived and not)
 * ================================
 * 
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PurchasehistoryService } from 'src/app/pages/services/purchasehistory.service';


@Component({
  selector: 'app-view-all-transactions-dialog',
  templateUrl: './view-all-transactions-dialog.component.html',
  styleUrls: ['./view-all-transactions-dialog.component.css']
})
export class ViewAllTransactionsDialogComponent implements OnInit {
  allPurchaseHistoryDataSource: any;
  displayedColumns: string[] = ['date', 'amount'];
  actions: string[] = ['update', 'disable'];
  checked: any = false;
  username: string = this.cookieService.get('sessionuser');
  dateFormatted;

  constructor(
    private cookieService: CookieService,
    private purchaseHistoryService: PurchasehistoryService,
  ) {
    this.purchaseHistoryService.findAllPurchasesByUserName(this.username).subscribe(res => {
      this.allPurchaseHistoryDataSource = res['data'];
      console.log(this.allPurchaseHistoryDataSource);
    }, err => {
      console.log(err);
    })
   }
  ngOnInit(): void {
  }
}
