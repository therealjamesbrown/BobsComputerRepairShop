import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserprofileService } from '../../services/userprofile.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-purchase-history-graph',
  templateUrl: './purchase-history-graph.component.html',
  styleUrls: ['./purchase-history-graph.component.css']
})
export class PurchaseHistoryGraphComponent implements OnInit {

  purchases: any;
  data: any;
  itemCount = [];
  labels = [];
  username: any = this.cookieService.get('sessionuser');

  constructor(
    private userProfileService: UserprofileService,
    private cookieService: CookieService) {

    //call the purchaseGraph api
    //console.log('i fired')
    //console.log(this.username);
      this.userProfileService.getUserPurchasesByGraph(this.username).subscribe(res => {
        this.purchases = res['data'];
        console.log(this.purchases);

        //loop the purchases
        for (const item of this.purchases){
          this.labels.push(item._id.title);
          this.itemCount.push(item.count);
        }

        this.data = {
          labels: this.labels,
          datasets: [
            //graph object
            {
              data: this.itemCount,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            }
          ]
        };
        console.log('data object');
        console.log(this.data);
      })
   }

  ngOnInit(): void {
  }

}
