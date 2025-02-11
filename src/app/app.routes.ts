import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
{path :'' , redirectTo:'home',pathMatch:'full'},
{path:'home' , component:HomeComponent},
{path:'about' , component:AboutComponent},
{path:'Services' , component:ServicesComponent},
{path:'Contact' , component:ContactComponent}

 
];

