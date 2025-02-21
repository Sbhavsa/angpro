import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatIconModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BtnComponent {
  @Input() brochureLabel: string = '';
  @Input() brochureUrl: string = '';
  @Input() brochureName: string = '';
  
  @Input() appDownloadLabel: string = '';
  @Input() appDownloadUrl: string = '';

  downloadFile(url: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  }
}






