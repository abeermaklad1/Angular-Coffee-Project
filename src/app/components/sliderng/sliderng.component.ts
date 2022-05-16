import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderng',
  templateUrl: './sliderng.component.html',
  styleUrls: ['./sliderng.component.css']
})
export class SliderngComponent implements OnInit {
  imgSrc:string = "../../../assets/11.jpg"
  images:string[] = ["../../../assets/11.jpg", "../../../assets/33.jpg", "../../../assets/22.jpg", "../../../assets/44.jpg", "../../../assets/55.jpg", "../../../assets/66.jpg", "../../../assets/77.jpg"];
  random:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  next(){
    
    for(var i = 0; i<3; i++)
    {
      this.random = Math.floor(Math.random() * 6);
      this.imgSrc = this.images[this.random];
      console.log(this.images[this.random])
    }
    // this.imgSrc = "../../../assets/33.jpg";
    
  }

}
