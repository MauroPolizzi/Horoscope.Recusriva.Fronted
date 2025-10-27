import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HoroscopeService } from '../../../../../core/services/horoscope.service';
import { HoroscopeRequest } from '../../../../../core/models/horoscope-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horoscope-page',
  templateUrl: './horoscope-page.component.html',
  styleUrls: ['./horoscope-page.component.scss'],
})
export class HoroscopePageComponent implements OnInit {
  
  private router = inject(Router);
  form!: FormGroup;

  submitted = false;
  lastResponse$ = this.horoscopeService.lastResponse$;

  constructor(private fb: FormBuilder, private horoscopeService: HoroscopeService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      //sign: ['', [Validators.required]],
      //lang: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const payload: HoroscopeRequest = {
      name: this.form.value.name!,
      gender: Number(localStorage.getItem('selectedGender')),
      email: this.form.value.email,
      birthDate: this.form.value.birthDate! // debe venir yyyy-MM-dd
    };
    this.horoscopeService.getHoroscope(payload).subscribe({
      next: (response) => { this.router.navigate(['/horoscopeResponse'], { state: {data: response} }) },
      error: (err) => { alert('Error al obtener horóscopo') }
    });
  }

  get f() {
    return this.form.controls;
  }

  viewHome() {
    this.router.navigateByUrl('/genderPage');
  }
}
