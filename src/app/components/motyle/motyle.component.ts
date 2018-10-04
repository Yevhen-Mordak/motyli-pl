import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motyle',
  templateUrl: './motyle.component.html',
  styleUrls: ['./motyle.component.scss']
})
export class MotyleComponent implements OnInit {

  cards:Array<Card> = [
    {
      title:"1. Attacus atlas",
      subtitle:"Filipiny",
      image:"assets/images/catalog/atlas-moth-522616_1280.jpg",
      text: `Attacus Atlas - motyl nocny, jeden z największych na całym świecie. Rozpiętość skrzydeł 18-26 cm. 
      Motyl ma niezwykły kolor - na brązowym tle widoczne są różowe linie, a szare trójkąty są prawie przezroczyste.
      Kokon chroni motyla przed drapieżnikami i jest narzędziem doboru naturalnego - tylko silne motyle mogą wydostać się z niego na zewnątrz. Nawet na etapie kokonu możliwe jest odróżnienie samca od samicy. Samica jest znacznie większa od samca i ma rozpiętość skrzydeł 24-26 cm, natomiast rozpiętość skrzydeł wynosi 18-20 cm.
      Cechą charakterystyczną tego gatunku jest to, że na początku zimy motyl może wpaść w stan hibernacji i spędzić tak rok przed nadejściem gorąca.
      Oczekiwana długość życia motyla wynosi około 7 dni i nie jest konieczne karmienie motyla, ponieważ żywi się on własnymi zapasami od czasu poczwarki.
      Motyl doskonale nadaje się na pojedynczy prezent lub na mini farmę. Warto jednak pamiętać o imponującym rozmiarze osobnika i kudłatej strukturze ciała motyla, aby przypadkowo nie wystraszyć nowego właściciela.
      `
    },
    {
      title:"2. Papilio palinurus",
      subtitle:"Filipiny, Tajlandia, Malezja",
      image:"assets/images/catalog/emerald-swallowtail-1394288_1280.jpg",
      text: `Papilio palinurus lub motyl-pawi - jak się go dumnie nazywa. Motyl ma oryginalny kształt skrzydeł, a końce wydłużają się w kształt kropli. Jasny kolor pozwala motylowi ukryć się przed drapieżnikami w liściach drzew.
      Rozpiętość skrzydeł osiąga 8-10 cm, karmi się owocami cytrusowymi. Średnia długość życia wynosi około 7-10 dni.
      Siedlisko motyli - Filipiny, Tajlandia, Malezja.
      Motyl jest bardzo fotogeniczny, w locie doskonale rozpościera skrzydła, co pozwala fotografom wykonywać doskonałe zdjęcia. Wygląda dobrze w “fajerwerkach z motyli”, ma dynamikę i wdzięk.
      `
    },
    {
      title:"3. Papilio Rumanzovia",
      subtitle:"Filipiny, Tajlandia, Malezja",
      image:"assets/images/catalog/butterfly-53016_1280.jpg",
      text: `Motyl Papilio rumanzovia lub Red Mormon jest jednym z najbardziej rozpoznawalnych motyli. Rozpiętość skrzydeł wynosi 12-14 cm, średnia długość życia to 7-10 dni.
      Samce i samice mają inny kolor - u mężczyzn mniej wyraźny czerwony kolor. Siedlisko motyli - Filipiny, Tajlandia, Malezja.
      Motyl rozkłada skrzydła, gdy siada, więc jest jednym z ulubionych dla fotografów. Nadaje się do prezentów w pocztówkach, jak również do masowych salw z żywych motyli.
      `
    },
    {
      title:"Cethosia biblis",
      subtitle:"Indie, Pakistan, Filipiny, Tajlandia",
      image:"assets/images/catalog/red-lacewing-1394296_1280.jpg",
      text: `Hojnie obdarzone przez naturę kolorami Cethosia Biblis. Sekretem nazwy tego motyla jest arabskie słowo Biblia, które tłumaczy się jako "książka". Ten motyl to doprawdy piękna ilustrowana książka!
      Siedlisko motyli - Indie, Pakistan, Filipiny, Tajlandia.
        Rozpiętość skrzydeł wynosi 6-8 cm, a żywotność to 5-7 dni.
      Motyl świetnie nadaje się do “motylich fajerwerków”, ponieważ dynamicznie i chaotycznie lata. Jednak Cethosia Biblis jest wyjątkowo przebiegły i może udawać... że jest martwy, spadając na bok. Kiedy niebezpieczeństwo mija, nagle wznosi się i odlatuje.
      `
    }, 
    {
      title:"Doleschalia bisaltide",
      subtitle:"Indie, Pakistan, Filipiny, Tajlandia",
      image:"assets/images/5.jpg",
      text: `Brązowy kolor motyla sprawia, że wygląda na pozór jak suchy liść.
      Siedlisko motyli - Indie, Pakistan, Filipiny, Tajlandia.
      Rozpiętość skrzydeł wynosi 6-8 cm, a żywotność to 5-7 dni.
      Motyl świetnie nadaje się do fajerwerków, ponieważ lata bardzo dynamicznie.
      `
    }, 
    {
      title:"Graphium agamemnon",
      subtitle:"Filipiny",
      image:"assets/images/catalog/butterfly-2068995_1280.jpg",
      text: `Zielony trójkąt nazywa się Graphium agamemnon.
      Jasny kolor motyla przypomina drapieżnikom, że jest niebezpieczny. Występuje na Filipinach.
      Rozpiętość skrzydeł wynosi 7-8 cm, a żywotność to 5-7 dni.
      Motyl leci doskonale i nadaje się do salutów.
      `
    }, 
    {
      title:"Pachliopta kotzebuea",
      subtitle:"Filipiny",
      image:"assets/images/catalog/crimson-rose-301449_1280.jpg",
      text: `Purpurowa róża to niezrozumiała nazwa Pachliopta kotzebuea.
      Jasny kolor motyla przypomina drapieżnikom, że jest niebezpieczny. Występuje na Filipinach.
      Rozpiętość skrzydeł wynosi 7-8 cm, a żywotność to 5-7 dni.
      Motyl przepięknie lata i doskonale nadaje się do salutów.
      `
    },
    {
      title:"Troides rhadamantus",
      subtitle:"??? 8",
      image:"assets/images/catalog/Troides rhadamantus.jpg",
      text: `Troides rhadamantus - duży motyl, którego skrzydła mają spiczasty kształt, co czyni je podobnymi do ptaków w locie.
      Rozpiętość skrzydeł 12-15 cm Wspaniały motyl do sesji zdjęciowych.
      Występuje w Azji Południowo-Wschodniej. Chętnie siedzi na rękach. W domu może żyć około dwóch tygodni.      
      `
    },
    {
      title:"Calligo Memnon",
      subtitle:"Peru, Kostaryca, Salwadorz, Meksyka",
      image:"assets/images/catalog/cream-owl-1394293_1280.jpg",
      text: `Żywy motyl Caligo mieszka w Peru, Kostaryce, Salwadorze, Meksyku. Łacińska nazwa tego motyla to Caligo Memnon. Jeden z naszych największych motyli, jego rozpiętość skrzydeł wynosi 15-17 cm. Na zewnętrznej stronie skrzydła motyl ma dwoje oczu przypominających oczy sowy. W ten sposób motyl straszy drapieżniki. Motyl Caligo radośnie reaguje na przejrzałego banana czy zapach piwa. Ten motyl nie nadaje się do  salw motyli, ponieważ jest znacznie większy niż inne i może w pudełku zmiażdżyć kogoś ze swoich “mniejszych kolegów”.`
    },
    {
      title:"X-X-X",
      subtitle:"??? 8",
      image:"assets/images/catalog/Troides rhadamantus.jpg",
      text: `X-X-X
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