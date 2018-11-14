import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motyle',
  templateUrl: './motyle.component.html',
  styleUrls: ['./motyle.component.scss']
})
export class MotyleComponent implements OnInit {

  cards:Array<Card> = [
    {
      title:"01. Papilio Rumanzovia",
      subtitle:"Filipiny, Tajlandia, Malezja",
      image:"assets/images/catalog/butterfly-53016_1280.jpg",
      text: `Motyl Papilio rumanzovia lub Red Mormon jest jednym z najbardziej rozpoznawalnych motyli. Rozpiętość skrzydeł wynosi 12-14 cm, średnia długość życia to 7-10 dni.
      Samce i samice mają inny kolor - u mężczyzn mniej wyraźny czerwony kolor. Siedlisko motyli - Filipiny, Tajlandia, Malezja.
      Motyl rozkłada skrzydła, gdy siada, więc jest jednym z ulubionych dla fotografów. Nadaje się do prezentów w pocztówkach, jak również do masowych salw z żywych motyli.
      `
    },
    {
      title:"02. Papilio palinurus",
      subtitle:"Filipiny, Tajlandia, Malezja",
      image:"assets/images/catalog/emerald-swallowtail-1394288_1280.jpg",
      text: `Papilio palinurus lub motyl-pawi - jak się go dumnie nazywa. Motyl ma oryginalny kształt skrzydeł, a końce wydłużają się w kształt kropli. Jasny kolor pozwala motylowi ukryć się przed drapieżnikami w liściach drzew.
      Rozpiętość skrzydeł osiąga 8-10 cm, karmi się owocami cytrusowymi. Średnia długość życia wynosi około 7-10 dni.
      Siedlisko motyli - Filipiny, Tajlandia, Malezja.
      Motyl jest bardzo fotogeniczny, w locie doskonale rozpościera skrzydła, co pozwala fotografom wykonywać doskonałe zdjęcia. Wygląda dobrze w “fajerwerkach z motyli”, ma dynamikę i wdzięk.
      `
    },
    {
      title:"03. Graphium agamemnon",
      subtitle:"Filipiny",
      image:"assets/images/catalog/butterfly-2068995_1280.jpg",
      text: `Zielony trójkąt nazywa się Graphium agamemnon.
      Jasny kolor motyla przypomina drapieżnikom, że jest niebezpieczny. Występuje na Filipinach.
      Rozpiętość skrzydeł wynosi 7-8 cm, a żywotność to 5-7 dni.
      Motyl leci doskonale i nadaje się do salutów.
      `
    }, 
    {
      title:"04. Pachliopta kotzebuea",
      subtitle:"Filipiny",
      image:"assets/images/catalog/crimson-rose-301449_1280.jpg",
      text: `Purpurowa róża to niezrozumiała nazwa Pachliopta kotzebuea.
      Jasny kolor motyla przypomina drapieżnikom, że jest niebezpieczny. Występuje na Filipinach.
      Rozpiętość skrzydeł wynosi 7-8 cm, a żywotność to 5-7 dni.
      Motyl przepięknie lata i doskonale nadaje się do salutów.
      `
    },
    {
      title:"05. Calligo Memnon",
      subtitle:"Peru, Kostaryca, Salwadorz, Meksyka",
      image:"assets/images/catalog/cream-owl-1394293_1280.jpg",
      text: `Żywy motyl Caligo mieszka w Peru, Kostaryce, Salwadorze, Meksyku. Łacińska nazwa tego motyla to Caligo Memnon. Jeden z naszych największych motyli, jego rozpiętość skrzydeł wynosi 15-17 cm. Na zewnętrznej stronie skrzydła motyl ma dwoje oczu przypominających oczy sowy. W ten sposób motyl straszy drapieżniki. Motyl Caligo radośnie reaguje na przejrzałego banana czy zapach piwa. Ten motyl nie nadaje się do  salw motyli, ponieważ jest znacznie większy niż inne i może w pudełku zmiażdżyć kogoś ze swoich “mniejszych kolegów”.`
    },
    {
      title:"06. Cethosia biblis",
      subtitle:"Indie, Pakistan, Filipiny, Tajlandia",
      image:"assets/images/catalog/red-lacewing-1394296_1280.jpg",
      text: `Hojnie obdarzone przez naturę kolorami Cethosia Biblis. Sekretem nazwy tego motyla jest arabskie słowo Biblia, które tłumaczy się jako "książka". Ten motyl to doprawdy piękna ilustrowana książka!
      Siedlisko motyli - Indie, Pakistan, Filipiny, Tajlandia.
        Rozpiętość skrzydeł wynosi 6-8 cm, a żywotność to 5-7 dni.
      Motyl świetnie nadaje się do “motylich fajerwerków”, ponieważ dynamicznie i chaotycznie lata. Jednak Cethosia Biblis jest wyjątkowo przebiegły i może udawać... że jest martwy, spadając na bok. Kiedy niebezpieczeństwo mija, nagle wznosi się i odlatuje.
      `
    }, 
    {
      title:"07. Troides rhadamantus",
      subtitle:"Indie, Nepal, Sri Lanka",
      image:"assets/images/catalog/Troides rhadamantus.jpg",
      text: `Troides rhadamantus - duży motyl, którego skrzydła mają spiczasty kształt, co czyni je podobnymi do ptaków w locie.
      Rozpiętość skrzydeł 12-15 cm Wspaniały motyl do sesji zdjęciowych.
      Występuje w Azji Południowo-Wschodniej. Chętnie siedzi na rękach. W domu może żyć około dwóch tygodni.      
      `
    },
    {
      title:"08. Doleschalia bisaltide",
      subtitle:"Indie, Pakistan, Filipiny, Tajlandia",
      image:"assets/images/catalog/Doleschallia bisaltide.jpg",
      text: `Brązowy kolor motyla sprawia, że wygląda na pozór jak suchy liść.
      Siedlisko motyli - Indie, Pakistan, Filipiny, Tajlandia.
      Rozpiętość skrzydeł wynosi 6-8 cm, a żywotność to 5-7 dni.
      Motyl świetnie nadaje się do fajerwerków, ponieważ lata bardzo dynamicznie.
      `
    }, 
    {
      title:"09. Morpho peleide",
      subtitle:"Meksyk, Argentyna i Peru",
      image:"assets/images/catalog/blue-morpho-784979_1280.jpg",
      text: `Żywy motyl Morphida (łacińska nazwa Morpho peleides) jest jednym z najpiękniejszych motyli na świecie. Ma rzadki niebieski kolor z metalicznym blaskiem. Jeden z naszych największych motyli, jego swing osiąga 15 cm. Doskonały zarówno do pojedynczych prezentów, jak i do salw z motyli.
      `
    },
    {
      title:"10. Attacus atlas",
      subtitle:"Filipiny",
      image:"assets/images/catalog/atlas-moth-522616_1280.jpg",
      text: `Attacus Atlas - motyl nocny, jeden z największych na całym świecie. Rozpiętość skrzydeł 18-26 cm. 
      Warto jednak pamiętać o imponującym rozmiarze osobnika i kudłatej strukturze ciała motyla, aby przypadkowo nie wystraszyć nowego właściciela.
      `
    },
            ];
  constructor() { }

  ngOnInit() {
  }

}
class Card{
  
  title:string;
  subtitle:string;
  image:string;
  text:string;

}