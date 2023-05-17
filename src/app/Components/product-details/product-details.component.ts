import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:any;
  product:Iproduct|null=null;
  constructor(private activatedrouter:ActivatedRoute,private productservice:ProductService){
   this.productId=Number(this.activatedrouter.snapshot.paramMap.get('id'));
}
  ngOnInit(): void {
    this.product=this.productservice.getProductById(this.productId);
  }


}
