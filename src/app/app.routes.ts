import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { SoftwareproComponent } from './pages/home/home-product/softwarepro/softwarepro.component';
import { RtomsComponent } from './pages/home/home-product/softwarepro/rtoms/rtoms.component';
import { HardwareproComponent } from './pages/home/home-product/hardwarepro/hardwarepro.component';
import { HomeProductComponent } from './pages/home/home-product/home-product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'product', component: HomeProductComponent,
    // children: [

    // ]
  },
  { path: 'product/softwarepro', component: SoftwareproComponent },
  { path: 'product/hardwarepro', component: HardwareproComponent },

  { path: 'about', component: AboutComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'rtoms', component: RtomsComponent },


  // { path: 'amcs', component: AmcsComponent },
  // { path: 'smsp', component: SmspComponent },
  // { path: 'erp', component: ErpComponent },
  // { path: 'sdms', component: SdmsComponent },
  // { path: 'pos-software', component: PosSoftwareComponent },
  // { path: 'milk-analyzer', component: MilkAnalyzerComponent },
  // { path: 'pos-machine', component: PosMachineComponent },
  // { path: 'electronic-weight-scale', component: ElectronicWeightScaleComponent },
  // Redirect unknown paths to home
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 50] }) // Enables smooth scrolling
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }