import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<Image> = [
    {image:'0.jpg', header: "Najlepszy prezent na wesele", text: "Zaskocz swoich gości kolorową niespodzianką."},
    {image:'2.jpg', header: "Wyhoduj własnego motyla", text: "Na mini-farmie domowej."},
    {image:'3.jpg', header: "Wypuść salwe z motyli", text: "Twoje święto stanie się egzotyczne."},
    {image:'4.jpg', header: "Stwórz niezapomniane święto", text: "Dzięki motylom tropikalnym."},
    {image:'1.jpg', header: "Mini Farma motyli na prezent", text: "Odkrywaj naturę za swoim dzieckiem."},
    {image:'7.jpg', header: "Jasne kolory natury", text: "Dla twoich urodzin."},
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
