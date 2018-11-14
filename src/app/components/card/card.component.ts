import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title:string;
  @Input() subtitle:string;
  @Input() image:string;
  @Input() text:string;
  @Input() cena:string;
  @Input() staraCena:string;

  constructor() { }

  ngOnInit() {
  }

}
