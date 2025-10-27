import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoroscopePageComponent } from './horoscope-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { HomePageComponent } from '../../home-page/home-page.component';
import { BreadcrumbComponent } from "../../../../../shared/components/breadcrumb/breadcrumb.component";
import { NavbarComponent } from "../../../../../shared/components/navbar/navbar.component";

@NgModule({
  declarations: [HoroscopePageComponent, HomePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BreadcrumbComponent,
    NavbarComponent,
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
]
})
export class HoroscopeModule { }
