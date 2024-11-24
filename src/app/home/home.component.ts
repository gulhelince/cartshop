import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getData:GetDataService) { }

  getCategorisData:any;
  getApplianceProductData:any=[];
  getFashionProductData:any=[];

  ngOnInit(): void {
    this.getCategorisData = this.getData.categoriesData;

    this.getData.productData.filter((ele:any)=>{
      if(ele.pdCategory == 'appliances')
      {
        this.getApplianceProductData.push(ele);
      }

      if(ele.pdCategory=='fashion')
        {
            this.getFashionProductData.push(ele);
        }
    
    });
  }

  bannerImages = [
    {
      id:1,
      img:'../../assets/images/img1.jpg',
    },
    {
      id:2,
      img:'../../assets/images/img2.jpg',
    },
    {
      id:3,
      img:'../../assets/images/img3.jpg',
    }
  ]

}
