import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<Image> = [
    {image:'1.jpg', header: "First slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {image:'2.jpg', header: "Second slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {image:'3.jpg', header: "Third slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {image:'4.jpg', header: "Forth slide label", text: "Nulla vitae elit libero, a pharetra augue mollis interdum."},
    {image:'7.jpg', header: "Seventh slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
  ];

  constructor() { }

  ngOnInit() {
  }

  adaptImage(image: string) {
    if(window.innerWidth <= 600)
      return `assets/images/small/${image}`;
      
    return `assets/images/${image}`;
  }
}

class Image{
  image:string;
  header:string;
  text:string;
}
