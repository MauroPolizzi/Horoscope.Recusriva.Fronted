import { Component, inject, OnInit } from '@angular/core';
import { HoroscopeResponse } from '../../../../core/models/horoscope-response.model';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { SharedModule } from "../../../../shared/shared.module";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-response-page',
  standalone: true,
  imports: [NavbarComponent, SharedModule, NgIf],
  templateUrl: './response-page.component.html',
  styleUrl: './response-page.component.scss'
})
export class ResponsePageComponent implements OnInit{
  
  private router = inject(Router);
  loader: boolean = false;
  data!: HoroscopeResponse;
  
  constructor() {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state?.['data'];
  }
  ngOnInit(): void {
    this.loader = true;

    if(this.data !== null) this.loader = false;
  }

  viewHome() {
    const genderStorage = localStorage.getItem('selectedGender');
    if(genderStorage !== null ) localStorage.removeItem('selectedGender');
    this.router.navigateByUrl('/');
  }
}
