import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-gender-page',
  templateUrl: './gender-page.component.html',
  styleUrl: './gender-page.component.scss',
  standalone: true, 
  imports: [BreadcrumbComponent, NavbarComponent]
})
export class GenderPageComponent implements OnInit{
  
  
  ngOnInit(): void {
    const genderStorage = localStorage.getItem('selectedGender');
    if(genderStorage !== null) localStorage.removeItem('selectedGender');
  }

  private router = inject(Router)

  selectedImage: number | null = null;
  isGenderStorage: boolean = false;
  
  viewHoroscopePage() {
    const genderStorage = localStorage.getItem('selectedGender');
    if(genderStorage !== null) this.isGenderStorage = true;

    if(this.isGenderStorage){
      this.router.navigateByUrl('/horoscopeForm');
    }
  }

  selectImage(imageGenderNumber: number): void {
    this.selectedImage = imageGenderNumber;
    localStorage.setItem('selectedGender', imageGenderNumber.toString());
  }

  isSelected(imageGenderNumber: number): boolean {
    return this.selectedImage === imageGenderNumber;
  }
}
