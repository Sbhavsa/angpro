import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ToutItem {
  image: string;
  headingId: string;
  title: string;
  description: string;
  link: string;
  linkId: string;
  linkText: string;
  legal?: string;
}

@Component({
  selector: 'app-hardwarepro',
  imports: [CommonModule,RouterModule],
  templateUrl: './hardwarepro.component.html',
  styleUrl: './hardwarepro.component.css',
  animations: [
    // Animation for individual promo items
    trigger('promoAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    // Stagger animation for the whole list
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HardwareproComponent implements OnInit {
  
  toutItems: ToutItem[] = [
    {
      image: 'download (1).jfif',
      headingId: 'whyvirginplus-heading7',
      title: 'Milk Analyzer',
      description: 'Cost-effective replacement for expensive infrared components while maintaining accuracy.',
      link: '/milk-analyzer',
      linkId: 'whyvirginplus-link7',
      linkText: 'Learn more'
    },
    {
      image: 'download (4).jfif',
      headingId: 'whyvirginplus-heading8',
      title: 'POS Machine',
      description: 'Fast recognition of 1D/2D payment codes in 0.7 seconds, Wi-Fi & 4G connectivity Fast recognition of 1D/2D payment codes in 0.7 seconds, Wi-Fi & 4G connectivity.',
      link: '/pos-machine',
      linkId: 'whyvirginplus-link8',
      linkText: 'Learn more'
    },
    {
      image: 'download (2).jfif',
      headingId: 'whyvirginplus-heading9',
      title: 'Electronic Weight Scale',
      description: 'Wide range of platform sizes for various weighing tasks.',
      link: '/electronic-weight-scale',
      linkId: 'whyvirginplus-link9',
      linkText: 'Learn more'
    }
  
  
];

constructor() { }

ngOnInit(): void { }


}







