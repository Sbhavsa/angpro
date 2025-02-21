import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

import { isPlatformBrowser } from '@angular/common';
import {  AfterViewInit ,Inject, PLATFORM_ID} from '@angular/core';
import { link } from 'fs';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SoftwareproComponent } from './softwarepro/softwarepro.component';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HardwareproComponent } from './hardwarepro/hardwarepro.component';



@Component({
  selector: 'app-home-product',
  imports: [CommonModule,SoftwareproComponent,RouterModule,HardwareproComponent],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent {
  slides = [
    {
      title: 'Software and Solution',
      backgroundImage: 'url("software.jpg")' , 
       link: '/product/softwarepro'

    },
    {
      title: 'hardware and Solution',
      backgroundImage: 'url("flat-computer-engineering-concept_23-2148154728.avif")' , 
       link: 'product/hardwarepro'
    }
  ];
  showCarousel: boolean = true;  // Control visibility of carousel

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Hide the carousel if a child route is active
      this.showCarousel = !this.route.firstChild;
    });
  }

  onclick(route:any){
    console.log("i am call");
    
    this.showCarousel = false;
    this.router.navigate([`${route}`])
  }


  
  ngAfterViewInit() {
    this.observeScrollAnimation();
  }

  observeScrollAnimation() {
    // const elements = document.querySelectorAll('.scroll-animate'); // Select all elements with 'scroll-animate' class
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Trigger animation when 10% of the element is visible
    };

    // const observer = new IntersectionObserver((entries, observer) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('show'); // Add 'show' class to trigger animation
    //       observer.unobserve(entry.target); // Stop observing the element once it's visible
    //     }
    //   });
    // }, options);

    // elements.forEach(element => {
    //   observer.observe(element); // Start observing each element
    // });
  }
}

