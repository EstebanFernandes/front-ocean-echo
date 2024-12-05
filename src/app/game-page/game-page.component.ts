import { Component } from '@angular/core';
import {Player} from '../models/player.model'
@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})


export class GamePageComponent {
  playerName:string="";

  addClicker()
  {

  }
}
