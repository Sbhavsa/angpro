import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import {  AfterViewInit ,Inject, PLATFORM_ID} from '@angular/core';
import { link } from 'fs';



@Component({
  selector: 'app-home-product',
  imports: [CommonModule],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent {
 
  slides = [
    {
      title: 'Software and Solution',
      backgroundImage: 'url("software.jpg")', 
       link: '#'

    },
    {
      title: 'hardware and Solution',
      backgroundImage: 'url("flat-computer-engineering-concept_23-2148154728.avif")' , 
       link: '#'
    }
  ];

  
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