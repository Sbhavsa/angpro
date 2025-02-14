import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{path :'' , redirectTo:'home',pathMatch:'full'},
{path:'home' , component:HomeComponent},
{path:'about' , component:AboutComponent},
{path:'Services' , component:ServicesComponent},
{path:'Contact' , component:ContactComponent}
];
@NgModule({
    imports: [
      RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 50] }) // Enables smooth scrolling
    ],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }