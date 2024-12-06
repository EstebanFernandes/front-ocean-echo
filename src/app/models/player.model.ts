import { Upgrade } from "./upgrade.model";
export interface Player {
    id:string;
    score:number;
    pseudo:string; //Answer text
    //Resources handle by a player 
    coral:number; // Resources
    temperature:number; // Resources
    salinity:number; // Resources
    waste:number; // Resources
    marinaFauna:number; // Resources
    acidity:number; // Resources
    clickerPoint:number;
    researchPoint:number;
    upgrades:Upgrade[];
}