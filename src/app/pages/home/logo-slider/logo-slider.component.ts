import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.css'
})
export class LogoSliderComponent {
  logos = [
    { src: 'Amul_official_logo.png', alt: 'Amul Official Logo' },
    { src: 'comferd.png', alt: 'Comferd Logo' },
    { src: 'nddb_dairy_services.png', alt: 'NDD Dairy Services Logo' },
    { src: 'mayur_dairy.png', alt: 'Mayur Dairy Logo' },
    { src: 'jammu_Kashmir_milk.png', alt: 'Jammu Kashmir Milk Logo' },
    { src: 'baani.png', alt: 'Baani Logo' },
    { src: 'aabad.png', alt: 'Aabad Logo' },
    { src: 'arawali.png', alt: 'Arawali Logo' },
    { src: 'bastar.png', alt: 'Bastar Logo' },
    { src: 'chamunda.png', alt: 'Chamunda Logo' },
    { src: 'dmf.png', alt: 'DMF Logo' },
    { src: 'gayathri.png', alt: 'Gayathri Logo' },
    { src: 'khyber.png', alt: 'Khyber Logo' },
    { src: 'maahi.png', alt: 'Maahi Logo' },
    { src: 'madhuram.png', alt: 'Madhuram Logo' },
    { src: 'mehsana.png', alt: 'Mehsana Logo' },
    { src: 'nandini.png', alt: 'Nandini Logo' },
    { src: 'narmada_dairy.png', alt: 'Narmada Dairy Logo' },
    { src: 'nisaraga.png', alt: 'Nisaraga Logo' },
    { src: 'panchmurti.png', alt: 'Panchmurti Logo' },
    { src: 'saamarthya.png', alt: 'Saamarthya Logo' },
    { src: 'sabar.png', alt: 'Sabar Logo' },
    { src: 'Shreeja-logo-small.png', alt: 'Shreeja Logo' },
    { src: 'shridhi.png', alt: 'Shridhi Logo' },
    { src: 'smu.png', alt: 'SMU Logo' },
    { src: 'srinivasa.png', alt: 'Srinivasa Logo' },
    { src: 'sudha.png', alt: 'Sudha Logo' },
    { src: 'surbhi.png', alt: 'Surbhi Logo' },
    { src: 'vishwaas.png', alt: 'Vishwaas Logo' }
  ];




}
