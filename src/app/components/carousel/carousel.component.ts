import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<Image> = [
    {image:'assets/images/1.jpg', header: "First slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {image:'assets/images/2.jpg', header: "Second slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {image:'assets/images/3.jpg', header: "Third slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {image:'assets/images/4.jpg', header: "Forth slide label", text: "Nulla vitae elit libero, a pharetra augue mollis interdum."},
    {image:'assets/images/5.jpg', header: "Fifth slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {image:'assets/images/6.jpg', header: "Sixth slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {image:'assets/images/7.jpg', header: "Seventh slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
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
