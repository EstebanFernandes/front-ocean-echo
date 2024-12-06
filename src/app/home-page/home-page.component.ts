import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule


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

constructor(private http:HttpClient){}

  createRoom(name: string) {
    this.http.post('http://oceans4.ydns.eu:8080/createRoom', {
      pseudo: name
    }).subscribe({
      next: (response) => {
        console.log('Room created successfully:', response);
        console.log(response)
        // Handle the response here (e.g., navigate to a new page, update UI)
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
          // Handle the response here (e.g., navigate to a new page, update UI)
        },
        error: (error) => {
          console.error('Error creating room:', error);
          // Handle the error here (e.g., show a notification to the user)
        }
      });
  }

}
