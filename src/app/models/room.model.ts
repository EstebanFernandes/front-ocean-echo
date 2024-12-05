import { Player } from "./player.model";

export interface Room {
    id:number;
    status:gameStatus;
    hostPlayerId:number;
    playerList:Player[]
    startTime:Date;
    endTime:Date;
    pastQuestionId:number[]
}

export enum gameStatus {
    WAITING,
    FULL,
    INGAME,
    RESULT
  }