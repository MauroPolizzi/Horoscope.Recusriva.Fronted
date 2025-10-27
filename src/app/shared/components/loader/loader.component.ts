import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: true,
  imports: [NgIf]
})
export class LoaderComponent implements OnInit, OnDestroy{

  isLoading: boolean = false;
  private subscription!: Subscription;

  constructor(private loaderService: LoaderService) {}
  
  ngOnInit(): void {
    this.subscription = this.loaderService.loadingSubject.subscribe(
      (status) => (this.isLoading = false)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
