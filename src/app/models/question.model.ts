export interface Question {
    id:number;
    text:string;
    correctAnswerId:number;
    reward:number; //Number 
}

export interface Answer {
    id:number;
    text:string; //Answer text
    questionId:number; // Id of corresponding question
    isTrue:boolean; //if the answer is the true or not
}