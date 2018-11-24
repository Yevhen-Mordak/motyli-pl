import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  FAQs: Array<FAQ> = [
    { header: "Dostawa i Płatność", text: "Motyle na terenie Polski doręczane są przez współpracujące firmy kurierskie. Odbiór osobisty na terenie Krakowa realizowany za wcześniejszym porozumieniem. Aby motyle zostały dostarczone, zamówienie należy złożyć za 7-14 dni przed planowanym prezentem.", router: { link:'/dostawa', text: 'Dostawa i Płatność'}},
    { header: "Jak długą żyją motyli?", text: "Motyle tropikalne żyją od paru dni do paru tygodni. Termin zależy od warunków i jak zdecyduje natura.", router: null},
    { header: "Jak otrzymam motyla?", text: "Klient otrzymuje pudełko z którego wyleci motyl lub kilka motyli w przypadku salwy. Jest możliwość otrzymania motyla w kopercie - lepiej dla ponad parę godzin lub w przypadku dłuższych transportów.", router: null},
    { header: "Co robić z motylem po prezencie?", text: "Po prezencie trzeba dbać o motyle i hodować raz dzienne. ", router: null},
    { header: "Jak karmić motyle?", text: "Motyle tropikalne jedzą słodkie soczystę warzywa, np. pomarancze, lub słodką wodę. Wystarczy karmić raz dziennie.", router: null},
    { header: "Skąd się biorą żywe motyle w Polsce?", text: "Otrzymujemy motyli z Wielkiej Brytanii, Filipin i Kosta-Riki ze wszystkimi zezwoleniami.", router: null},
    { header: "Czy motyle są bezpieczne?", text: "Tak, motyle są bezpieczne i hipoalergiczne.", router: null},
    { header: "Reklamacje", text: "Wskaźnik urodzeń motyli w farmie wynosi 70-80%. Jeśli motyl narodzi się podczas dostawy, wymienimy go na własny koszt, pod warunkiem, że zdjęcie zostanie dostarczone w dniu dostawy. Dla farmy z trzech motyli gwarantowane urodzenie co najmniej jednego motyla, dla farmy z pięciu co najmniej dwóch motyli.", router: { link:'/regulamin', text: 'Regulamin'}},
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
