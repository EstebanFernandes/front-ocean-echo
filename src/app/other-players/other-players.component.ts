import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-other-players',
  standalone: true,
  imports: [ScrollPanelModule, ProgressBarModule, CardModule],
  templateUrl: './other-players.component.html',
  styleUrl: './other-players.component.css'
})
export class OtherPlayersComponent {
  
  @Input() playerList!:Player[]
  @Input() playerId!:number
  
}
