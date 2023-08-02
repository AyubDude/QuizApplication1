import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-totalscore',
  templateUrl: './totalscore.component.html',
  styleUrls: ['./totalscore.component.css']
})
export class TotalscoreComponent {

  public finalscore: number;

  constructor(private questioncomponent: QuestionComponent) {
    this.finalscore = this.questioncomponent.getFinalScore();
  }

}
