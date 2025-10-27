import { Location, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
 
   /** Título del navbar */
  @Input() title: string = '';

  /** Si se debe mostrar el botón de "volver" */
  @Input() showBackButton: boolean = true;

  constructor(private location: Location, private router: Router) {}
  
  
  ngOnInit(): void {
  }
  
  goBack(): void {
    // const genderStorage = localStorage.getItem('selectedGender');
    // if(genderStorage !== null && (this.router.url === '/genderPage' || this.router.url === '/horoscopeStatisticsResponse') ) 
    //   localStorage.removeItem('selectedGender');
    this.location.back();
  }
}
