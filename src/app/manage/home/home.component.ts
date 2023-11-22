import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AssistantComponent } from 'src/app/assistant/assistant.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    FontAwesomeModule,
    NgIf,
    RouterModule,
    AssistantComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  openAssistant = false;

  assitOpenClose() {
    this.openAssistant = !this.openAssistant;
  }

}
