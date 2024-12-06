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
import { ActivatedRoute } from '@angular/router';
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

  roomId: string = "";

  gameInterval: Subscription = new Subscription;
  debutScore: number = 80;
  earthState: number = 0;
  maxEarthState: number = 5;
  earthFile: string = "assets/terre" + this.earthState + ".png"
  playerName: string = "";
  player: Player = {
    id: "",
    score: 1,
    pseudo: "Esteban", //Answer text
    //Resources handle by a player 
    coral: 100, // Resources
    temperature: 50, // Resources
    salinity: 100, // Resources
    waste: 200, // Resources
    marinaFauna: 30, // Resources
    acidity: 30, // Resources
    clickerPoint: 0,
    researchPoint: 0,
    upgrades: []
  }
  room: Room = {
    id: "",
    status: gameStatus.INGAME,
    hostPlayerId: "",
    playerList: [],
    startTime: new Date(),
    endTime: new Date(),
    pastQuestionId: [],
    playerCount: -1
  };
  question: Question =
    {
      id: 0,
      text: "En 2019, un projet lancé par une équipe de chercheurs islandais a permis d'injecter du dioxyde de carbone de l'atmosphère dans des fonds marins pour en faire des roches et limiter les gaz à effet de serre. Quelle est le nom de cette initiative ?",
      correctAnswerId: 3,
      reward: 2
    };
  answer: Answer[] = []
  // Expose the enum to the template
  gameStatus = gameStatus;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  addClicker() {
    console.log("+1 click")
  }
  ngOnInit() {
    this.roomId = (this.route.snapshot.paramMap.has('roomId')) ? String(this.route.snapshot.paramMap.get('roomId')) : "";
    console.log('Room ID:', this.roomId);
    this.fetchRoomInfo("")
    console.log(this.room)
    if(this.room.status===gameStatus.INGAME)
      this.startGame()
    this.computeEarthState()
  }


  fetchRoomInfo(playerId:string) {
    if(playerId!=="")
      this.player.id=playerId;
    this.http.get('http://oceans4.ydns.eu:8080/rooms').subscribe({
      next: (response: any) => {
        console.log('Room fetched successfully:', response);
        console.log(response)
        for (let room of response.rooms) {
          if (room.roomId == this.roomId) {
            this.room = {
              id: this.roomId,
              status: room.status,
              hostPlayerId: room.hostPlayerId,
              playerList: [],
              pastQuestionId: [],
              startTime: new Date(),
              endTime: new Date(),
              playerCount: room.playerCount
            }
            break;
          }
        }
      },
      error: (error) => {
        console.error('Error creating room:', error);
        // Handle the error here (e.g., show a notification to the user)
      }
    });
  }

  computeEarthState() {
    // Exemple de score actuel du joueur
    let currentScore: number = this.player.score; // Score actuel du joueur

    // Calcul de l'état en fonction du score actuel
    this.earthState = Math.min(Math.floor(((this.debutScore - currentScore) / this.debutScore) * this.maxEarthState), this.maxEarthState - 1);
    this.earthFile = "assets/terre" + this.earthState + ".png"
    console.log(this.earthFile)
  }

  computePlayerScore() {


  }

  startGame() {
    this.gameInterval = interval(1000).subscribe(() => {
      this.sendGameData();
      this.updateScore();
    });
  }

  // Update score based on different stats
  updateScore(): void {
    // Logic to update score based on stats

  }

  // Send game data to the server
  sendGameData(): void {
      this.http.get(`http://oceans4.ydns.eu:8080/game?roomId=${this.roomId}`,
      )
      .subscribe({
          next: (response: any) => {
            console.log('Data receive successfully:', response);
            console.log(response)
            this.room.playerList = response.players
          },
          error: (error) => {
            console.error('Error sending data:', error);
            // Handle the error here (e.g., show a notification to the user)
          }
        });


    this.http.post(`http://oceans4.ydns.eu:8080/player`,
      {
        player:this.player
      }
    )
    .subscribe({
        next: (response: any) => {
          console.log('Data send successfully:', response);
        },
        error: (error) => {
          console.error('Error sending data:', error);
          // Handle the error here (e.g., show a notification to the user)
        }
      });
  }

}
