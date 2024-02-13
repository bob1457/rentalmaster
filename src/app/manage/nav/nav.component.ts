import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-nav',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class ManageNavComponent {

}
