/**
 * 
 * ================================
 * ; Title: orderhistory.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for purchase history management.
 * ================================
 * 
 */


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Invoice } from '../../../shared/invoice.interface';
import { PurchasehistoryService } from '../../services/purchasehistory.service';


@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  purchaseHistoryDataSource: any;
  displayedColumns: string[] = ['date', 'amount', 'action'];
  actions: string[] = ['update', 'disable'];
  checked: any = false;
  username: string = this.cookieService.get('sessionuser');
  dateFormatted;

  constructor(
    private cookieService: CookieService, 
    private purchaseHistoryService: PurchasehistoryService,
    private dialog: MatDialog) {
   
  this.purchaseHistoryService.findAllPurchasesByUserName(this.username).subscribe(res => {
    this.purchaseHistoryDataSource = res['data'];
  }, err => {
    console.log(err);
  })
   }


  ngOnInit(): void {
  }

//view transaction details
viewTransactionDetails(transaction){
  //const dialogRef = this.dialog.open()
}

}
