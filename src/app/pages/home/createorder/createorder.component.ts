import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { CatalogService } from '../../administration/services/catalog.service';
import { Catalog } from '../../administration/interfaces/catalog.interface';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
  catalogDataSource: Catalog[];
  displayedColumns: string[] = ['title', 'price', 'select'];
  actions: string[] = ['update', 'disable'];
  checked: any = false;

  constructor(private http: HttpClient, private catalogService: CatalogService) {

    /**
     * 
     * Find all catalog items
     * 
     */
    this.catalogService.findAllCatalogItems().subscribe(res => {
      this.catalogDataSource = res['data'];
    }, err => {
      console.log(err);
    })

   }

  ngOnInit(): void {
  }

}
