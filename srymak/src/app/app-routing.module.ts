import { CourseCardComponent } from './course-card/course-card.component';
import { SestComponent } from './sest/sest.component';
import { HomeworkComponent } from './homework/homework.component';
import { QuizMultiplayerComponent } from './quiz-multiplayer/quiz-multiplayer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import * as uuid from 'uuid';
import { FaqsComponent } from './faqs/faqs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizTeacherComponent } from './quiz-teacher/quiz-teacher.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'homework', component: HomeworkComponent },
  { path: 'quiz-teacher', component: QuizSelectionComponent },
  { path: 'sest', component: SestComponent },
  { path: 'stse', component: SestComponent },
  { path: 'quiz/student', redirectTo: `/quiz/student/${uuid.v4()}`, pathMatch: "full" },
  { path: 'quiz/teacher', redirectTo: `/quiz/teacher/${uuid.v4()}`, pathMatch: "full" },
  { path: 'videochat', redirectTo: `/videochat/${uuid.v4()}`, pathMatch: "full" },
  { path: 'videochat/:roomId', component: VideoChatComponent },
  { path: 'quiz/student/:roomId', component: QuizMultiplayerComponent },
  { path: 'quiz/teacher/:roomId', component: QuizTeacherComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: '',
    component: DashboardBaseComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [5, 0], onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
