import { NgClass } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

import { RouterModule } from '@angular/router';  // Import RouterModule
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@Component({
  selector: 'app-navbar',
  standalone: true,  
  imports: [RouterModule, NgClass ,MatMenuModule, MatButtonModule, MatIconModule,FontAwesomeModule ],  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] ,
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  menuvariable: boolean = false;
  menuiconvariable: boolean = false;
   
  toggleMenu(): void {
    this.menuvariable = !this.menuvariable;
    this.menuiconvariable = !this.menuiconvariable;
  }

  closeMenu(): void {
    this.menuvariable = false;
    this.menuiconvariable = false;
  }
}
