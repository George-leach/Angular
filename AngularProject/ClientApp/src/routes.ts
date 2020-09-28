import { Routes } from '@angular/router'
import { CvComponent } from './app/Routing/cv/cv.component';
import { SectionOrdersComponent } from './app/Routing/section-orders/section-orders.component';
import { SectionSalesComponent } from './app/Routing/section-sales/section-sales.component';
import { SectionhealthComponent } from './app/Routing/sectionhealth/sectionhealth.component';
import { HomeComponent } from './app/home/home.component';
export const appRoutes: Routes = [
  { path: 'CV', component: CvComponent },
  { path: 'Orders', component: SectionOrdersComponent },
  { path: 'Sales', component: SectionSalesComponent },
  { path: 'Health', component: SectionhealthComponent },
  { path: '', component: HomeComponent },
];
