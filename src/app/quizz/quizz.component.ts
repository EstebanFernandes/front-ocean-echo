import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { Question, Answer } from '../models/question.model';
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule, DividerModule,CardModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})

export class QuizzComponent {
  @Input() currentQuestion!:Question; 
  @Input() answers!:Answer[]; 
  @Output() chooseAnswer = new EventEmitter<Answer>();
  hasAnswer:boolean=false;
  reply:string="";

  answerClick(answer: Answer) {
    //mettre en vert le bon et rouge les mauvais
    this.hasAnswer=true;
    this.chooseAnswer.emit(answer);
    for (let currentAnswer of this.answers){
      if (currentAnswer.id=== this.currentQuestion.correctAnswerId)
      {
        currentAnswer.isTrue=true;
      }
      else
      currentAnswer.isTrue=false;
    }
    
    if (answer.isTrue){
      this.reply = "Bien joué !"
    }
    else {
      this.reply = "Perdu..."
    }

  }
}
