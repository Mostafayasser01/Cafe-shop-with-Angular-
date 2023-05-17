import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor(private x:Router){}
  ToProducts(e:any){
    e.preventDefault();
    this.x.navigate(['/products']);
  }
}
