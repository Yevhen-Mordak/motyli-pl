import { Component } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Motyli.pl';

  public constructor (private seoService: SeoService)
  {
        seoService. addSeoData()
  }

  public showCookies(){
    return localStorage.getItem('acceptedCookies') ? '' : 'show';
  }

  public acceptCookies(){
    return localStorage.setItem('acceptedCookies', 'show');
  }
}
