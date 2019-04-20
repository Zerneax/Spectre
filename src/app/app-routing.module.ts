import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
