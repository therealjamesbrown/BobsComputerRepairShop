import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCatalogItemComponent } from '../dialogs/create-catalog-item/create-catalog-item.component';
import { UpdateCatalogItemComponent } from '../dialogs/update-catalog-item/update-catalog-item.component';
import { Catalog } from '../interfaces/catalog.interface';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalogmanagement',
  templateUrl: './catalogmanagement.component.html',
  styleUrls: ['./catalogmanagement.component.css']
})
export class CatalogmanagementComponent implements OnInit {

  catalogDataSource: Catalog[];
  displayedColumns: string[] = ['title', 'price', 'status', 'action'];
  actions: string[] = ['update', 'disable'];

  constructor(private http: HttpClient, private dialog: MatDialog, private catalogServce: CatalogService) { 
    /**
       * 
       * Find all Catalog Items
       */
      this.catalogServce.findAllCatalogItems().subscribe(res => {
        this.catalogDataSource = res['data'];
        console.log(this.catalogDataSource);
      }, err => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

    /**
   * 
   * SECTION FOR CATALOG APIS (create, update, delete)
   * You'll need to import http client and the related service
   * 
   */

  //createItem
  createCatalogItem(){
    const dialogRef = this.dialog.open(CreateCatalogItemComponent, {
      data: {

      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'create'){
        //refresh the list
        this.catalogServce.findAllCatalogItems().subscribe(res => {
          this.catalogDataSource = res['data'];
          console.log(this.catalogDataSource);
        }, err => {
          console.log(err);
        })
      }
    })
  }

  //updateItem
  updateCatalogItem(data){
    console.log(data);
    const dialogRef = this.dialog.open(UpdateCatalogItemComponent, {
      data: {
        data,
        dialogHeader: 'Update Catalog Item'
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'update'){
        //refresh the list
        
        this.catalogServce.findAllCatalogItems().subscribe(res => {
          this.catalogDataSource = res['data'];
          console.log(this.catalogDataSource);
        }, err => {
          console.log(err);
        })
      }
    })
  }

  //deleteItem
}
