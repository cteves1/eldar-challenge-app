import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  products = [
    {
      code: 155,
      name: 'product',
      category: 'cat',
      quantity: 5,
    }
  ];

  constructor(){
  }

}
