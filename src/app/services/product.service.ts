import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productList } from '../models/productlist';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllProduct():Iproduct[]{
    return productList;
  }
  getProductById(ProductId:number):Iproduct{
    return productList.filter((product)=> product.id==ProductId)[0];
  }
}
