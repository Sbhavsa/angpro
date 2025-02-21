import { Component } from '@angular/core';
import { LogoSliderComponent } from './logo-slider/logo-slider.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeClientsComponent } from './home-clients/home-clients.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeclientterComponent } from './homeclientter/homeclientter.component';

@Component({
  selector: 'app-home',
  imports: [LogoSliderComponent,HomeAboutComponent,HomeClientsComponent,HomeServicesComponent,HomeProductComponent,HomeContactComponent,HomeclientterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  


}
