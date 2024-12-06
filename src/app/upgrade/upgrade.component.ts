import { Component, Input } from '@angular/core';
import { Upgrade } from '../models/upgrade.model';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-upgrade',
  standalone: true,
  imports: [CardModule,DividerModule],
  templateUrl: './upgrade.component.html',
  styleUrl: './upgrade.component.css'
})
export class UpgradeComponent {
@Input() nextUpgradesClicker!:Upgrade[];
@Input() clickerPoints:number= 0;
@Input() nextUpgradesResearch!:Upgrade[];
@Input() researchPoints:number=0;
}
