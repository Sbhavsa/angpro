import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faCode, faMobileAlt, faShoppingCart, faPaintBrush, faServer, faBullhorn, faMicrochip, faNetworkWired } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.css'
})
export class HomeServicesComponent {
  services = [
    { title: 'Web App Development', icon: faCode, description: 'With our attention to the detail in creating a web application, We ranks higher among the web application development services' },
    { title: 'Mobile App Development', icon: faMobileAlt, description: 'We design, produce and implement solutions for mobile and tablet applications for android. We turn your app ideas into a reality and make it revenue drive source for your business' },
    { title: 'IOT development', icon: faNetworkWired , description: 'The Internet of Things (IoT) is the third dimension of the technology that has filled the space between the physical and online world.' }
   
  ];

}
