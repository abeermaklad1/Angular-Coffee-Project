import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imgSrc:string = "../../../assets/77c.jpg"
  images:string[] = ["../../../assets/5cc.jpg", "../../../assets/6c.jpg", "../../../assets/44c.jpg", "../../../assets/22c.jpg", "../../../assets/33c.jpg", ];
  random:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  next(){
    
    for(var i = 0; i<3; i++)
    {
      this.random = Math.floor(Math.random() * 4);
      this.imgSrc = this.images[this.random];
      // console.log(this.images[this.random])
    }
    // this.imgSrc = "../../../assets/33.jpg";
    
  }

}
