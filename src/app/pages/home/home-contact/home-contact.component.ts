import { Component , OnInit} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-contact',
  imports: [ReactiveFormsModule,FontAwesomeModule,CommonModule,NgIf],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.css'
})
export class HomeContactComponent {
  faOffice = faBuilding;
  faBriefcaseIcon = faBriefcase;
  faLocation = faMapMarkerAlt; 
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[2-9]\d{2}-\d{3}-\d{4}$/)]],
      city: ['', Validators.required],
      state:['', Validators.required],
      message: ['', Validators.required],
      
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      console.log('Form Data:', this.contactForm.value);
    }
  }
  

}






