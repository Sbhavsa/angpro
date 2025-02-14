import { Component } from '@angular/core';

@Component({
  selector: 'app-home-clients',
  imports: [],
  templateUrl: './home-clients.component.html',
  styleUrl: './home-clients.component.css'
})
export class HomeClientsComponent {
  clients = [
    { name: 'Teksystems', image: 'https://ngstek.com/images/clients/teksystems.jpg' },
    { name: 'Insight Global', image: 'https://ngstek.com/images/clients/insight-global.jpg' },
    { name: 'Doozer', image: 'https://ngstek.com/images/clients/doozer.jpg' },
    { name: 'Hexaware', image: 'https://ngstek.com/images/clients/hexaware.jpg' },
    { name: 'INT Technologies', image: 'https://ngstek.com/images/clients/int-technologies.jpg' },
    { name: 'Judge', image: 'https://ngstek.com/images/clients/judge.jpg' },
    { name: 'Syntel', image: 'https://ngstek.com/images/clients/syntel.jpg' }
  ];

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  };

}
