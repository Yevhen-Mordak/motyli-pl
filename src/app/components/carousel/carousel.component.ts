import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<Image> = [
    {image:'1.jpg', header: "Najlepszy prezent na wesele", text: "Zaskoć niespodzianką."},
    {image:'2.jpg', header: "Wychoduj własnego motyla", text: "Na mini-farmie domowej."},
    {image:'3.jpg', header: "Wypuść salut z motyli", text: "Twoje święto będzie egzotychnym."},
    {image:'4.jpg', header: "Zrób święto niezapomnianym", text: "Dzięki motylam tropikalnym."},
    {image:'7.jpg', header: "Otwórz jasne kolory natury", text: "Dla twoich urodzin."},
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
