import { Player } from "./player.model";

export interface Room {
    id:string;
    status:gameStatus;
    hostPlayerId:string;
    playerList:Player[]
    startTime:Date;
    endTime:Date;
    pastQuestionId:number[],
    playerCount:number
}

export enum gameStatus {
    WAITING,
    FULL,
    INGAME,
    RESULT
  }