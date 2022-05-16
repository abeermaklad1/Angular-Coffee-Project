import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../Model/iproduct';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string = '';
  image:string = '';
  price:number = 0;
  quantity:number = 0;
  counter:number = 0;
  checkUsername:boolean = false;
  pCount:string = "d-none m-5 bg-info p-3 w-25 m-auto rounded-2"
  products:{name:string; image:string; price:number; quantity:number}[] = [];

  myData:string = 'Data from Child';

  //table
  productst: IProduct[] = [];
  count:number = 0;
  totalPrice:number = 0;
  fullPrice:number = 0;
  myDate:Date;
  pCountt:string = "d-none m-5 bg-info p-3 w-25 m-auto rounded-2";

  // @Input() receivedData:string = '';

  @Output() ourEvent = new EventEmitter();
  sendData(){
    this.ourEvent.emit(this.myData);
  } 


  constructor() { 
    this.myDate = new Date();
    this.productst = [
      {
        id: 1,
        title: 'Coffee1',
        imgUrl: '../../../assets/77c.jpg',
        price: 300,
        quantity: 1,
      },
      {
        id: 2,
        title: 'Coffee12',
        imgUrl: '../../../assets/88c.jpg',
        price: 300,
        quantity: 0,
      },
      {
        id: 3,
        title: 'Coffee3',
        imgUrl: '../../../assets/55c.jpg',
        price: 300,
        quantity: 1,
      },
      {
        id: 4,
        title: 'Coffee4',
        imgUrl: '../../../assets/5cc.jpg',
        price: 300,
        quantity: 10,
      },
      {
        id: 5,
        title: 'Coffee5',
        imgUrl: '../../../assets/88c.jpg',
        price: 400,
        quantity: 10,
      },
      {
        id: 6,
        title: 'Coffee5',
        imgUrl: '../../../assets/88c.jpg',
        price: 400,
        quantity: 1,
      },
      {
        id: 7,
        title: 'Coffee5',
        imgUrl: '../../../assets/88c.jpg',
        price: 400,
        quantity: 10,
      },
    ];
  }

  

  ngOnInit(): void {
    // this.ourEvent.emit(this.myData);
  }


  addStudent(){
    if(this.name.length <= 3)
    {
      this.checkUsername = true;
    }
    else
    {
      this.checkUsername = true;
    }
    if(this.name.length > 3 && this.price > 20 && this.quantity < 10)
    {
        var product:{name:string; image:string; price:number; quantity:number} = {
        name: this.name,
        image: this.image,
        price: this.price,
        quantity: this.quantity
      }
      this.products.push(product);
    }
    
  }
  addProduct(){
    this.pCount = " m-5 bg-info p-3 w-25 m-auto rounded-2";
    if(this.quantity > this.counter)
    {
      this.counter++;
    }
    else
    {
      this.counter;
    }
    
  }
//table
buy(price:number, quantity:string){
  this.pCountt = " m-5 bg-info p-3 w-25 m-auto rounded-2";
  this.count++;

  this.totalPrice = parseInt(quantity) * price;
  this.fullPrice = this.totalPrice + this.fullPrice;
  
  
}
 
}
