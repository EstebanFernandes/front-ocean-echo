import { Component } from '@angular/core';
import { Player } from '../models/player.model'
import { WaitingRoomPageComponent } from '../waiting-room-page/waiting-room-page.component';
import { StatDisplayComponent } from '../stat-display/stat-display.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { QuizzComponent } from '../quizz/quizz.component';
import { OtherPlayersComponent } from '../other-players/other-players.component';
import { Room, gameStatus } from '../models/room.model';
import { Answer, Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [WaitingRoomPageComponent, StatDisplayComponent
    , UpgradeComponent, QuizzComponent, OtherPlayersComponent,
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})

export class GamePageComponent {
  gameInterval: Subscription = new Subscription;
  debutScore: number = 80;
  earthState: number = 0;
  maxEarthState: number = 5;
  earthFile: string = "assets/terre" + this.earthState + ".png"
  playerName: string = "";
  player: Player={
    id:0,
    score:1,
    pseudo:"Esteban", //Answer text
    //Resources handle by a player 
    coral:100, // Resources
    temperature:50, // Resources
    salinity:100, // Resources
    waste:200, // Resources
    marinaFauna:30, // Resources
    acidity:30, // Resources
    clickerPoint:0,
    researchPoint:0,
    upgrades:[]
  }
  room: Room | null = null;
  question: Question =
    {
      id: 0,
      text: "Qui est cocu ?",
      correctAnswerId: 3,
      reward: 2
    };
  answer: Answer[] = []
  // Expose the enum to the template
  gameStatus = gameStatus;
  constructor(private http: HttpClient) {}
  addClicker() {
    console.log("+1 click")
  }
  ngOnInit() {
    
    this.computeEarthState()
  }


  fetchRoomInfo()
  {

    

  }

  computeEarthState() {
    // Exemple de score actuel du joueur
    let currentScore: number = this.player.score; // Score actuel du joueur
    
    // Calcul de l'état en fonction du score actuel
    this.earthState = Math.min(Math.floor(((this.debutScore - currentScore) / this.debutScore) * this.maxEarthState), this.maxEarthState - 1);
    this.earthFile="assets/terre"+this.earthState+".png"
    console.log(this.earthFile)
  }

  computePlayerScore()
  {

   
  }

  startGame()
  {
    this.gameInterval = interval(1000).subscribe(() => {
      this.updateScore();
      this.sendGameData();
    });
  }

    // Update score based on different stats
    updateScore(): void {
      // Logic to update score based on stats
      
    }
  
    // Send game data to the server
    sendGameData(): void {
      
    }
  
}
