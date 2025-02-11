import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelsecompo',
  imports: [],
  templateUrl: './ifelsecompo.component.html',
  styleUrl: './ifelsecompo.component.css'
})
export class IfelsecompoComponent {
  xy=12;
  dispaly1=true;
  togglediv=true;
  hide(){
    this.dispaly1=false;
  }
  show19(){
    this.dispaly1=true;
  }
  toggle(){
    this.dispaly1=!this.dispaly1;
  }
  toggledivv(){
    this.togglediv=!this.togglediv;
  }

 
}

