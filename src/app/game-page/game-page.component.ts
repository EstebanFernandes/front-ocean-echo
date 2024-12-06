import { Component } from '@angular/core';
import {Player} from '../models/player.model'
import { WaitingRoomPageComponent } from '../waiting-room-page/waiting-room-page.component';
import { StatDisplayComponent } from '../stat-display/stat-display.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { QuizzComponent } from '../quizz/quizz.component';
import { OtherPlayersComponent } from '../other-players/other-players.component';
import { Room,gameStatus } from '../models/room.model';
import { Answer,Question } from '../models/question.model';
@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [WaitingRoomPageComponent,StatDisplayComponent
    ,UpgradeComponent,QuizzComponent,OtherPlayersComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})

export class GamePageComponent {
  playerName:string="";
  player!:Player; 
  room: Room = {
    id: -1,
    status:gameStatus.INGAME,
    hostPlayerId: -1,
    playerList: [],
    startTime: new Date(),
    endTime: new Date(),
    pastQuestionId: []
  };
  question:Question=
  {
    id:0,
    text:"Qui est cocu ?",
    correctAnswerId:3,
    reward:2
  };
  answer:Answer[]=[]
// Expose the enum to the template
gameStatus = gameStatus;

  addClicker()
  {
    console.log("+1 click")
  }
  ngOnInit()
  {
    this.answer.push({
      id:0,
      text: "Toi",
      questionId:0,
      isTrue:false
    })
    this.answer.push({
      id:1,
      text: "Moi",
      questionId:0,
      isTrue:false
    })
    this.answer.push({
      id:2,
      text: "Tout",
      questionId:0,
      isTrue:false
    })
    this.answer.push({
      id:3,
      text: "ce qu'ils le veulent",
      questionId:0,
      isTrue:false
    })
  }
}
