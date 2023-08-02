import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";

  public questionList: any = [];

  public currentQuestion: number = 0;

  public points: number = 0;



  counter = 60;

  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval: any;


  constructor(private questionservice: QuestionService) {

  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startTheCounter();
  }

  getAllQuestions() {
    this.questionservice.getQuestionJson().subscribe(res => {
      this.questionList = res.questions;
    })

  }

  nextQuestion() {

    this.currentQuestion++;
    this.resetCounter();
  }

  prevQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (option.correct) {
      this.points += 15;
      this.correctAnswer++;
      this.currentQuestion++;
    }
    else {
      this.points -= 10;
      this.currentQuestion++;
      this.incorrectAnswer++;
    }
  }

  startTheCounter() {
    this.interval = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter == -0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval.unsubscribe();
    }, 6000000);
  }

  stopCounter() {

    this.interval.unsubscribe();
    this.counter = 0;

  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startTheCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();

    this.counter = 60;
    this.currentQuestion = 0;
  }

  isLastQuestion(): boolean {
    return this.currentQuestion === this.questionList.length - 1;
  }

  getFinalScore(): number {

    const finalScore = this.correctAnswer + 15;
    return finalScore;
  }

}
