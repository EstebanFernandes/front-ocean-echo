import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    InputTextModule, ButtonModule, FormsModule, DividerModule,
    CardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  

  nameHost: string = ""
  nameJoin: string = ""
  nameIdJoin: string = ""

constructor(private http:HttpClient, private router: Router){}

  createRoom(name: string) {
    this.http.post('http://oceans4.ydns.eu:8080/createRoom', {
      pseudo: name
    }).subscribe({
      next: (response:any) => {
        console.log('Room created successfully:', response);
        console.log(response)
        const roomId = response.roomId;  // Ensure this is the correct property from the response
          if (roomId) {
            // Navigate to the room join page
            this.router.navigate([`/room/${roomId}`]);
          } else {
            console.error('Room ID is not available in the response');
          }
      },
      error: (error) => {
        console.error('Error creating room:', error);
        // Handle the error here (e.g., show a notification to the user)
      }
    });
  }

  joinRoom(name:string,roomid: string) {
     this.http.post('http://oceans4.ydns.eu:8080/joinRoom', { pseudo : name,
      roomId:roomid }).subscribe({
        next: (response) => {
          console.log('Room created successfully:', response);
          console.log(response)
          
        },
        error: (error) => {
          console.error('Error creating room:', error);
          // Handle the error here (e.g., show a notification to the user)
        }
      });
  }

}
