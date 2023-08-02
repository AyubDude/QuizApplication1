import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { TotalscoreComponent } from './totalscore/totalscore.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: "full" },
  { path: "totalscore", component: TotalscoreComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "question", component: QuestionComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
