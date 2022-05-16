import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../Model/iproduct';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  products: IProduct[] = [];
  count:number = 0;
  totalPrice:number = 0;
  myDate:Date;
  pCount:string = "d-none m-5 bg-info p-3 w-25 m-auto rounded-2";

  @Input() receivedData:string = '';

  constructor() {
    this.myDate = new Date();
    this.products = [
      {
        id: 1,
        title: 'Iphone',
        imgUrl: '../../../assets/l1.jpg',
        price: 300,
        quantity: 1,
      },
      {
        id: 2,
        title: 'Lenovo',
        imgUrl: '../../../assets/11.jpg',
        price: 300,
        quantity: 0,
      },
      {
        id: 3,
        title: 'Dell',
        imgUrl: '../../../assets/l4.jpg',
        price: 300,
        quantity: 1,
      },
      {
        id: 4,
        title: 'Glasses',
        imgUrl: '../../../assets/p4.jpg',
        price: 300,
        quantity: 10,
      },
      {
        id: 5,
        title: 'Laptop',
        imgUrl: '../../../assets/l3.jpg',
        price: 400,
        quantity: 10,
      },
    ];
  }

  ngOnInit(): void {}
  buy(price:number, quantity:string){
    this.pCount = " m-5 bg-info p-3 w-25 m-auto rounded-2";
    this.count++;

    this.totalPrice = parseInt(quantity) * price;
    
    
  }
}
