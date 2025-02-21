import { Component } from '@angular/core';
import { HomeContactComponent } from '../home/home-contact/home-contact.component';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-contact',
  imports: [HomeContactComponent,BannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
