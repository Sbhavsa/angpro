import { Component } from '@angular/core';
import { BannerComponent } from '../../../../../banner/banner.component';
import { BtnComponent } from '../../../../../btn/btn.component';

@Component({
  selector: 'app-rtoms',
  imports: [BannerComponent,BtnComponent],
  templateUrl: './rtoms.component.html',
  styleUrl: './rtoms.component.css'
})
export class RtomsComponent {

}
