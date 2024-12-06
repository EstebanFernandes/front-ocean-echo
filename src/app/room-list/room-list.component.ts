import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent {
  rooms: any;

  constructor(private http:HttpClient) {
    this.getRooms().then(() => {

    });
  }

  getRooms() {
    return new Promise((resolve) => {
      this.http.get('http://oceans4.ydns.eu:8080/rooms').subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          console.error('Error creating room:', error);
        }
      });
    });

  }

}
