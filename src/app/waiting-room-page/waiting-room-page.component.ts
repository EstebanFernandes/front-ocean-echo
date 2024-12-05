import { Component, ElementRef, ViewChild, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-waiting-room-page',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, FormsModule, DividerModule],
  templateUrl: './waiting-room-page.component.html',
  styleUrl: './waiting-room-page.component.css'
})
export class WaitingRoomPageComponent {
  idRoom: number = 0
  playerList: string[]  = []
  hostId: number = 0
  playerId: number = 1

  ngOnInit(){
    this.playerList = ['malo', "antoine"]
  }
}
