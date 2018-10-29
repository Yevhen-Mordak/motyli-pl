import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { MotyleComponent } from './components/motyle/motyle.component';
import { SalutComponent } from './components/salut/salut.component';
import { FarmaComponent } from './components/farma/farma.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { FaqComponent } from './components/faq/faq.component';
import { DostawaComponent } from './components/dostawa/dostawa.component';


const routes: Routes = [
  { path: '', component: MainComponent,
    data: {
      title: "Kupić żywe motyle w Polsce | Sklep z motylami tropikalnymi - motyli.pl", // page title
      metatags: {
        description: "motyli.pl to pierwszy sklep z żywymi motylami w Polsce. Sprzedajemy motyle tropikalne , organizujemy saluty motylkowe i sprzedajemy motyle. Wszystkie motyle są uprawiane na naszym własnej małej farmie, więc oferujemy tylko świeże motyli na sprzedaż o maksymalnym okresem życia.",
        keywords: "kupić żywe motyle, żywe motyle, cena, żywe tropikalne motyle, tropikalne motyle, kup tropikalne motyle, żywe motyle w Polsce, żywe motyle Kraków, motyle tropikalne Kraków" // comma separated
      } 
    } 
  }, 
  { path: 'motyle', component: MotyleComponent,
    data: {
      title: "Katalog motyli tropikalnych sklepu Motyli - motyli.pl", // page title
      metatags: {
        description: "Katalog sklepu motyli.pl z motylami tropikalnymi",
        keywords: "katalog motyli, katalog motyli tropikalnych, kup motyle w prezencie, żywe motyle jako prezent, motyli w pudełku, motyli jako prezent w pudełku, motyli na wesele" // comma separated
      } 
    } 
  }, 
  { path: 'salwy', component: SalutComponent,
    data: {
      title: "Salwy z motyli w Polsce od Motyli - motyli.pl", // page title
      metatags: {
        description: "Salwy żywych motyli są ozdobą każdego święta i urodzin. Nasza firma ma duże doświadczenie w organizowaniu salw z motyli. Zamów salwy z motyli, a Twoje święto będzie niezapomniane",
        keywords: "Salwy z motyli, salwa z żywych motyli tropikalnych, fajerwerk z tropikalnych motyli, salwa z motyli w Polsce, fajerwerk z motyli, salwa z motyli Kraków, salut z motyli Wrocław, fajerwerk motyli z pudełka, salwa motyli z pudełka, salwy motyli wesele" // comma separated
      } 
    } 
  }, 
  { path: 'farma', component: FarmaComponent,
    data: {
      title: "Motylarnia domowa lub motyl domowy z Motyli - motyli.pl", // page title
      metatags: {
        description: "Motyl domowy lub motylarnia domowa to wyjątkowy prezent dla dziecka, dzięki któremu można wyhodować motyle tropikalne w domu i oglądać ich życie.",
        keywords: "motylkowa farma domowa, motyl domowy, kup domową hodowlę motyli, kup dom motyla, dom motyla, motylarnia polska, motylarnia w Polsce, motylarnia Kraków" // comma separated
      } 
    } 
  },
  { path: 'kontakt', component: KontaktComponent,
    data: {
      title: "Kontakty sklepu motyli.pl", // page title
      metatags: {
        description: "Kontakty sklepu motyli.pl",
        keywords: "kontakt motyli, kup motyli, kup poczwarki motyli" // comma separated
      } 
    } 
  },
  { path: 'faq', component: FaqComponent,
    data: {
      title: "FAQ | Często zadawane pytania | motyli.pl", // page title
      metatags: {
        description: "Często zadawane pytania do sklupe motyli.pl",
        keywords: "Dostawa i platność, jak hodować motyli, cena" // comma separated
      } 
    } 
  },
  { path: 'dostawa', component: DostawaComponent,
    data: {
      title: "Dostawa i platność | motyli.pl", // page title
      metatags: {
        description: "Warunki dostawy i platnośći sklepu motyli.pl",
        keywords: "Dostawa motyli, płatność motyli, cena" // comma separated
      } 
    } 
  },
  { path: '**', component: PageNotFoundComponent } // no match go to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', enableTracing: /*todo: remove to false*/true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
