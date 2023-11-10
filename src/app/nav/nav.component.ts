import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserInfo } from '../models/user-info';

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
  user: UserInfo | null;
  providers = ['twitter', 'github', 'aad'];
  redirect = '/manage'; // window.location.pathname;
  
  
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  async ngOnInit() {

    console.log('production', this.env)
    console.log('redirect', this.redirect)
    this.user = await this.getUserInfo();
  }

  async getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  logout() {
    console.log('logout')
  }
}
