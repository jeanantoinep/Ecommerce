import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private _productService: ProductService
  ) { }


  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      this.products = data;
    }
    )
  }

}
