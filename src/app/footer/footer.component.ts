import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AssistantComponent } from '../assistant/assistant.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    AssistantComponent,
    MatBottomSheetModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(AssistantComponent);
  }



}
