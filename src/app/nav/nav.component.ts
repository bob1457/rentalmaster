import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showMenu = false;
  env = environment.production;
  
  
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    console.log('object', this.env)
  }
}
