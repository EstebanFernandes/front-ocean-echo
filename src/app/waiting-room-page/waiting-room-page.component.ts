import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, input, output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { Room } from '../models/room.model';
import { FetchServiceService } from '../fetch-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-room-page',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, FormsModule, DividerModule],
  templateUrl: './waiting-room-page.component.html',
  styleUrl: './waiting-room-page.component.css'
})
export class WaitingRoomPageComponent {

  constructor(private http: HttpClient, private router: Router
  ) {
  }
  @Input() room!: Room;
  @Input() playerId!: string;
  onStatusUpdate = output<string>();

  ngOnInit() {
    if(this.room.playerCount==1)
    {
      this.playerId= this.room.hostPlayerId
    }
  }

  quitWaitingRoom() {
    this.http.post('http://oceans4.ydns.eu:8080/joinRoom', {
      roomId: this.room.id,
      playerId: this.playerId
    }).subscribe({
      next: (response) => {
        console.log('Leaving room successfully:', response);
        console.log(response)
        this.router.navigate([`/home`]);
      },
      error: (error) => {
        console.error('Error leaving room:', error);
        // Handle the error here (e.g., show a notification to the user)
      }
    });
  }


  startGame() {
    if (this.room.playerCount>0) {
      this.http.post('http://oceans4.ydns.eu:8080/start', {
        roomId: this.room.id
      }).subscribe({
        next: (response: any) => {
          console.log('Room started successfully:', response);
          console.log(response)
          const roomId = response.roomId;  // Ensure this is the correct property from the response
          this.onStatusUpdate.emit(this.playerId)
        },
        error: (error) => {
          console.error('Error creating room:', error);
          // Handle the error here (e.g., show a notification to the user)
        }
      });
    }
  }


 
}
