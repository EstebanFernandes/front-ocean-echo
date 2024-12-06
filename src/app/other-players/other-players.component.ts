import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-other-players',
  standalone: true,
  imports: [TableModule],
  templateUrl: './other-players.component.html',
  styleUrl: './other-players.component.css'
})
export class OtherPlayersComponent {
  
  @Input() playerList!:Player[]
}
