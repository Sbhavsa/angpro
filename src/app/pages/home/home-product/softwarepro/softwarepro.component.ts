import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RtomsComponent } from './rtoms/rtoms.component';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  selector: 'app-softwarepro',
  standalone: true,
  imports: [CommonModule, RtomsComponent, RouterModule],
  templateUrl: './softwarepro.component.html',
  styleUrls: ['./softwarepro.component.css'],
  animations: [
    trigger('promoAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
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
export class SoftwareproComponent implements OnInit {
  @ViewChild('top', { static: false }) topElement!: ElementRef;

  toutItems: ToutItem[] = [
    {
      image: '01-Software-Solution-1.jpg',
      headingId: 'whyvirginplus-heading1',
      title: 'RTOMS',
      description: 'RTOMS stands for Real Time Order Management system where users can place orders online.',
      link: '/rtoms',
      linkId: 'whyvirginplus-link1',
      linkText: 'Learn more',
    },
    {
      image: '02-Software-Solution-1.jpg',
      headingId: 'whyvirginplus-heading2',
      title: 'AMCS',
      description: 'PC Based Automatic Milk Collection System is known for the white revolution.',
      link: '/amcs',
      linkId: 'whyvirginplus-link2',
      linkText: 'Learn more'
    },
    {
      image: '03-Software-Solution-1.jpg',
      headingId: 'whyvirginplus-heading3',
      title: 'SMSP',
      description: 'SMSP is an Android-based Milk Procurement System.',
      link: '/smsp',
      linkId: 'whyvirginplus-link3',
      linkText: 'Learn more'
    },
    {
      image: '04-Software-Solution-1.jpg',
      headingId: 'whyvirginplus-heading4',
      title: 'ERP',
      description: 'Custom-designed ERP solutions tailored to client requirements.',
      link: '/erp',
      linkId: 'whyvirginplus-link4',
      linkText: 'Learn more'
    },
    {
      image: '05-Software-Solution-1.jpg',
      headingId: 'whyvirginplus-heading5',
      title: 'SDMS',
      description: 'A unique all-in-one dairy management solution from procurement to production.',
      link: '/sdms',
      linkId: 'whyvirginplus-link5',
      linkText: 'Learn more'
    },
    {
      image: '06-Software-Solution-1.jpg',
      headingId: 'whyvirginplus-heading6',
      title: 'Software POS',
      description: 'Software that simplifies billing at your point of sale (POS).',
      link: '/pos-software',
      linkId: 'whyvirginplus-link6',
      linkText: 'Learn more'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Scroll to top whenever the route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.scrollToTop();
    });
  }

  scrollToTop(): void {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
