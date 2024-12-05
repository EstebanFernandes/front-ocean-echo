import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, DividerModule,CardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  nameHost: string = ""
  nameJoin: string = ""
  nameIdJoin: string = ""


  createRoom() {
    if (this.nameHost !== "") {
      //logic to create room
    }
  }

  joinRoom() {
    if (this.nameJoin !== "" && this.nameIdJoin !== "") {
      //logic to join room
    }
  }

}
