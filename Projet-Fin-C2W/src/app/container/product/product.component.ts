import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item: Product = { id: 0, title:'', description: '', price: 0, currency: '', link: '' };
  constructor() { }

  ngOnInit(): void {
  }

}
