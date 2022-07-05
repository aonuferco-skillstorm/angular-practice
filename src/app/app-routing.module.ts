import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: '', redirectTo: '/landing', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
