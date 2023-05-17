import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productList } from 'src/app/models/productlist';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Iproduct[]=[];
constructor(private productservice:ProductService){


  // this.products=productList;
}
  ngOnInit(): void {
   this.products=this.productservice.getAllProduct();
  }

}
