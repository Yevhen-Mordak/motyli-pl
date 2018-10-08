import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  FAQs: Array<FAQ> = [
    { header: "Dostawa i Platność", text: "todo: text", router: { link:'/dostawa', text: 'Dostawa i Platność'}},
    { header: "Jak długo żyją motyli?", text: "Żyją motyli tropikalne od parę dni do parę tygodni. Termin zależy od warunków i jak zdecyduje natura.", router: null},
    { header: "Jak ja otrzymam motylą?", text: "Klient otrzymuje pudełko z którego wyleci motyl lub kilka motyli w przypadku salutu. Jest możliwość otrzymania motyla w kopercie - lepiej dla ponad parę godzin lub dłuższych transportów.", router: null},
    { header: "Co robić z motylem po prezencie?", text: "Po prezencie trzeba dbać o motyle i hodować raz dzienne. ", router: null},
    { header: "Jak hodować motyli?", text: "Motyli tropikalne jedzą słodkie soczystę warzywa, np. pomaranczy, lub słodką wodę. Wystarczy hodować raz dziennie.", router: null},
    { header: "Skąd się biorą żywe motyle w Polsce?", text: "Otrzymujemy motyli z Wielkiej Brytanii, Filipin i Kosta-Riki ze wszystkimi zezwoleniami.", router: null},
    { header: "Czy są motyle bezpieczne?", text: "Tak, motylę są bezpieczne i hipoalergeny.", router: null},
    { header: "Reklamacje", text: "todo: text", router: { link:'/regulamin', text: 'Regulamin'}},
  ];

  constructor() { }

  ngOnInit() {
  }

}

class FAQ{
  header:string;
  text:string;
  router: Router;
}
class Router{
  link: string;
  text: string;
}
