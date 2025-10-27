import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HoroscopeService } from '../../../../core/services/horoscope.service';
import { StatisticsSignResponse } from '../../../../core/models/statistics-sign-response.model';
import { HistoryItem } from '../../../../core/models/history-item.model';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss',
  standalone: true,
  imports: [NgFor, NavbarComponent]
})
export class StatisticsPageComponent {
  
  dataStatistic!: StatisticsSignResponse[];
  dataHistory!: HistoryItem[]; 

  constructor(private horoscopeService: HoroscopeService) { 
    this.getStatisticsSign();
    this.getAllHistory();
  }

  getStatisticsSign() {
    this.horoscopeService.getStatisticsSign().subscribe({
      next: (response) => { this.dataStatistic = response },
      error: (err) => { alert('Error al obtener las estadisticas') }
    });
  }

  getAllHistory() {
    this.horoscopeService.getHistory().subscribe({
      next: (response) => { this.dataHistory = response },
      error: (err) => { alert('Error al obtener el historial') }
    });
  }
}
