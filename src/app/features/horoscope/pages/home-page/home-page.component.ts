import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  private router = inject(Router);
  
  viewGenderPage() {
    this.router.navigateByUrl('/genderPage');
  }
  
  viewStatisticsAndHistory() {
    this.router.navigateByUrl('/horoscopeStatisticsResponse');
  }
}
