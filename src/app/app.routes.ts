import { Routes } from '@angular/router';
import { GenderPageComponent } from './features/horoscope/pages/gender-page/gender-page.component';
import { HoroscopePageComponent } from './features/horoscope/pages/horoscope-page/horoscope-page/horoscope-page.component';
import { ResponsePageComponent } from './features/horoscope/pages/response-page/response-page.component';
import { StatisticsPageComponent } from './features/horoscope/pages/statistics-page/statistics-page.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/horoscope/pages/horoscope-page/horoscope-page/horoscope.module').then(m => m.HoroscopeModule)},
    { path: 'genderPage', component: GenderPageComponent },
    { path: 'horoscopeForm', component: HoroscopePageComponent },
    { path: 'horoscopeResponse', component: ResponsePageComponent },
    { path: 'horoscopeStatisticsResponse', component: StatisticsPageComponent },
    { path: '**', redirectTo: '' }
];
