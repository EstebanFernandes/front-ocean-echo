import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-stat-display',
  standalone: true,
  imports: [],
  templateUrl: './stat-display.component.html',
  styleUrl: './stat-display.component.css'
})
export class StatDisplayComponent {
  namePictures = ["score","temperature","salinity","coral","waste","marinaFaune","acidity"]
  @Input() player!:Player;
}
