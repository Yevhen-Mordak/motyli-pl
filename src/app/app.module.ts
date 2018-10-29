import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MotyleComponent } from './components/motyle/motyle.component';
import { SalutComponent } from './components/salut/salut.component';
import { FarmaComponent } from './components/farma/farma.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { KontaktFormComponent } from './components/kontakt-form/kontakt-form.component';
import { CardComponent } from './components/card/card.component';
import { DostawaComponent } from './components/dostawa/dostawa.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PageNotFoundComponent,
    MotyleComponent,
    SalutComponent,
    FarmaComponent,
    KontaktComponent,
    MainComponent,
    FooterComponent,
    FaqComponent,
    KontaktFormComponent,
    CardComponent,
    DostawaComponent
  ],
  imports: [
    AppRoutingModule,
    /*NgbCarousel,  NgbSlide,  NgbCarouselConfig,*/ NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
