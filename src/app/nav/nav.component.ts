import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserInfo } from '../models/user-info';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [
    { provide: ActivatedRoute, useValue: {  } }
  ]
})
export class NavComponent {
  title = 'Welcome to Rental Master'
  showMenu = false;
  env = environment.production;
  user: UserInfo | null;
  providers = ['twitter', 'github', 'aad'];
  login_redirect = "/manage"; //window.location.pathname;
  logout_redirect = "/"; //
  
  
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  async ngOnInit() {

    console.log('production', this.env)
    
    // this.user = await this.getUserInfo();
  }

  // async getUserInfo() {
  //   try {
  //     const response = await fetch('/.auth/me');
  //     const payload = await response.json();
  //     const { clientPrincipal } = payload;
  //     return clientPrincipal;
  //   } catch (error) {
  //     console.error('No profile could be found');
  //     return undefined;
  //   }
  // }

  logout() {
    console.log('logout')
  }
}
