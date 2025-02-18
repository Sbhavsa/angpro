import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-clients',
  templateUrl: './home-clients.component.html',
  styleUrls: ['./home-clients.component.css']
})
export class HomeClientsComponent implements OnInit {
  installationCount = 0;
  happyCustomers = 0;
  statesCovered = 0;

  finalInstallationCount = 3000;
  finalHappyCustomers = 200;
  finalStatesCovered = 10;

  ngOnInit() {
    this.animateCount('installationCount', this.finalInstallationCount, 2000);
    this.animateCount('happyCustomers', this.finalHappyCustomers, 2000);
    this.animateCount('statesCovered', this.finalStatesCovered, 2000);
  }

  animateCount(property: keyof HomeClientsComponent, target: number, duration: number) {
    let stepTime = Math.max(Math.floor(duration / target), 10); // Prevent division by zero
    let currentCount = 0;

    let interval = setInterval(() => {
      if (currentCount >= target) {
        (this as any)[property] = target; 
        clearInterval(interval);
      } else {
        currentCount++;
        (this as any)[property] = currentCount; 
      }
    }, stepTime);
  }
}
