import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { Room } from '../models/room.model';
import { FetchServiceService } from '../fetch-service.service';

@Component({
  selector: 'app-waiting-room-page',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, FormsModule, DividerModule],
  templateUrl: './waiting-room-page.component.html',
  styleUrl: './waiting-room-page.component.css'
})
export class WaitingRoomPageComponent {

  constructor(public fetchService:FetchServiceService){
  }
  @Input() room!:Room;
  idRoom: number = 0
  playerList: string[]  = []
  hostId: number = 0
  playerId: number = 0

  ngOnInit(){
    this.playerList = ['malo', "antoine"]
  }
  startGame() {
    if (this.playerList.length > 0) {

      //logic to start
    }
  }
  quitWaitingRoom() {
    //logic to quit
  }
  pauseWaitingRoom() {
    //logic to pause
  }
}
