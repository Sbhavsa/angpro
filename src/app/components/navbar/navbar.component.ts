import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true,  // Indicate that this is a standalone component (if applicable)
  imports: [RouterModule, NgClass],  // Include RouterModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Correct property name: styleUrls (plural)
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
