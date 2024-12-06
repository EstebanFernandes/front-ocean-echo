import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; // import Button Module
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { Question, Answer } from '../models/question.model';
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, DividerModule,CardModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})

export class QuizzComponent {
  @Input() currentQuestion!:Question; 
  @Input() answers!:Answer[]; 
  @Output() chooseAnswer = new EventEmitter<Answer>();
}
