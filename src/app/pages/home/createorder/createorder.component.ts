/**
 * 
 * ================================
 * ; Title: createOrder.component.ts
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Modified by: James Brown
 * ; Date: 10/14/2020
 * ; Description: component responsible for creating new invoices/orders.
 * ================================
 * 
 */


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { CatalogService } from '../../administration/services/catalog.service';
import { Catalog } from '../../administration/interfaces/catalog.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InvoiceReviewDialogComponent } from '../dialogs/invoice-review-dialog/invoice-review-dialog.component';


@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
form: FormGroup;
userName: string;
allServices: []; //all the services (disabled and enabled)
activeServices: []; //only enabled services
lineItems: any[];
discount: string;


  constructor(
    private http: HttpClient, 
    private catalogService: CatalogService,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
    ) {

    //get the username
    this.userName = this.cookieService.get('sessionuser');

    /**
     * 
     * Find all catalog items
     * 
     */
    this.catalogService.findAllCatalogItems().subscribe(res => {
      this.allServices = (res['data']);
      
      //filter out the archived transractions and push them into a new datasource array
    this.activeServices = [];
    for(let item of this.allServices){
      if(item['isDisabled'] != true ){
        this.activeServices.push(item);
      }
    }
    //console.log(this.activeServices);
    }, err => {
      console.log(err);
    })

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      parts: [null, Validators.required],
      labor: [null, Validators.required],
      alternator: [null, null]
    })
  }

  submit(form){
    //console.log('form just got logged')
    console.log(form);
    const selectedServiceIds = [];

    for(const[key, value] of Object.entries(form.checkGroup)) {
      if(value) {
        selectedServiceIds.push({
          id: key
        })
      }
    }
    console.log(selectedServiceIds);
    this.lineItems = [];

    /**
     * 
     * Build the invoice object
     * 
     */
     for(const savedService of this.activeServices){
       for(const selectedService of selectedServiceIds) {
         if(savedService['_id'] === selectedService.id){
          this.lineItems.push({
            title: savedService['title'],
            price: savedService['price']
          });
         }
       }
     }
     console.log(this.lineItems);

     const partsAmount = parseFloat(form.parts);
     const laborAmount = form.labor * 50;
     const lineItemTotal = this.lineItems.reduce((prev, cur) => prev + cur.price, 0);
     const subTotal = partsAmount + laborAmount + lineItemTotal;
     const discount = parseFloat(subTotal) * .10;
     const total = subTotal - discount
     console.log(total);

     const invoice = {
       userName: this.userName,
       lineItems: this.lineItems,
       partsAmount: partsAmount,
       laborAmount: laborAmount,
       lineItemTotal: lineItemTotal,
       total: total,
       orderDate: new Date()
     } 

     console.log(invoice);
     const dialogRef = this.dialog.open(InvoiceReviewDialogComponent, {
       data: {
         invoice: invoice
       },
       disableClose: true,
       width: '800px'
     })
     
  }

}
