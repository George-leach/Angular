import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './Routing/cv/cv.component';
import { SectionOrdersComponent } from './Routing/section-orders/section-orders.component';
import { SectionSalesComponent } from './Routing/section-sales/section-sales.component';
import { SectionhealthComponent } from './Routing/sectionhealth/sectionhealth.component'
import {appRoutes} from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SidebarComponent,
    CvComponent,
    SectionOrdersComponent,
    SectionSalesComponent,
    SectionhealthComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
