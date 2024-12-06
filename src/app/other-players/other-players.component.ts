import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-other-players',
  standalone: true,
  imports: [CardModule],
  templateUrl: './other-players.component.html',
  styleUrl: './other-players.component.css'
})
export class OtherPlayersComponent {
  
  @Input() playerList!:Player[]
  @Input() playerId!:number
  
}
