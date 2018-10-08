import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { MotyleComponent } from './components/motyle/motyle.component';
import { SalutComponent } from './components/salut/salut.component';
import { FarmaComponent } from './components/farma/farma.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { FaqComponent } from './components/faq/faq.component';


const routes: Routes = [
  { path: '', component: MainComponent,
    data: {
      title: "Motyli.pl", // page title
      metatags: {
        description: "Kup żywe motyli w Polsce.",
        keywords: "motyli, motyle, żywe, wesele, prezent, dziecku" // comma separated
      } 
    } 
  }, 
  // todo: remove (!)
  { path: 'motyli-pl', component: MainComponent,
    data: {
      title: "Motyli.pl", // page title
      metatags: {
        description: "Kup żywe motyli w Polsce.",
        keywords: "motyli, motyle, żywe, wesele, prezent, dziecku" // comma separated
      } 
    } 
  }, // default is main
  { path: 'motyle', component: MotyleComponent,
    data: {
      title: "Rodzaje dostępnych motyli", // page title
      metatags: {
        description: "Motyli tropikalne dostępne w Polsce",
        keywords: "motyli, motyle, tropicalne, zywe, caligo, mamoth" // comma separated
      } 
    } 
  }, 
  { path: 'salut', component: SalutComponent,
    data: {
      title: "---", // page title
      metatags: {
        description: "---",
        keywords: "---" // comma separated
      } 
    } 
  }, 
  { path: 'farma', component: FarmaComponent,
    data: {
      title: "---", // page title
      metatags: {
        description: "---",
        keywords: "---" // comma separated
      } 
    } 
  },
  { path: 'kontakt', component: KontaktComponent,
    data: {
      title: "---", // page title
      metatags: {
        description: "---",
        keywords: "---" // comma separated
      } 
    } 
  },
  { path: 'faq', component: FaqComponent,
    data: {
      title: "---", // page title
      metatags: {
        description: "---",
        keywords: "---" // comma separated
      } 
    } 
  },
  { path: 'dostawa', component: FaqComponent,
    data: {
      title: "Dostawa i Platność", // page title
      metatags: {
        description: "---",
        keywords: "---" // comma separated
      } 
    } 
  },
  { path: '**', component: PageNotFoundComponent } // no match go to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: /*todo: remove to false*/true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
