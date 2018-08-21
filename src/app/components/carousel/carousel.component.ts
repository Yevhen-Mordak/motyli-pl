import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<Image> = [
    {image:'assets/images/500.jpg', header: "First slide label", text: "Nulla vitae elit libero, a pharetra augue mollis interdum."},
    {image:'assets/images/600.jpg', header: "Second slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {image:'assets/images/700.jpg', header: "Third slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
  ];

  constructor() { }

  ngOnInit() {
  }

}

class Image{
  image:string;
  header:string;
  text:string;
}
