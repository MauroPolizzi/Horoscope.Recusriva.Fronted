import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  standalone: true,
  imports: [NgFor, NgIf]
})
export class BreadcrumbComponent {
  /**
   * Recibe el número del paso actual (1, 2 o 3)
  */
  @Input() currentStep: number = 1;

  /**
   * Nombres de los pasos (pueden ser personalizados)
  */
  steps: string[] = ['Ingresa tu genero', 'Ingresa tus datos', 'Confirmación'];
}
