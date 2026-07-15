import { TeacherHomeworkUploadComponent } from './teacher-homework-upload/teacher-homework-upload.component';
import { SotComponent } from './sot/sot.component';
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
import { SotDashboardComponent } from './sot-dashboard/sot-dashboard.component';
import { SotBaseComponent } from './sot-base/sot-base.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomePageComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'faqs',component:FaqsComponent},

  {path:'quiz-teacher', component:QuizSelectionComponent},
  {path:'sest', component:SestComponent},
  { path: 'quiz/student', redirectTo: `/quiz/student/${uuid.v4()}`, pathMatch: "full"},
  { path: 'quiz/teacher', redirectTo: `/quiz/teacher/${uuid.v4()}`, pathMatch: "full"},
  {path:'videochat',redirectTo:`/videochat/${uuid.v4()}`,pathMatch:"full"},
  {path:'videochat/:roomId',component:VideoChatComponent},
  {path:'quiz/student/:roomId',component:QuizMultiplayerComponent},
  {path:'quiz/teacher/:roomId',component:QuizTeacherComponent},
  {path:'teacher/uploadhomework',component:TeacherHomeworkUploadComponent},
  { path: 'courses', component: CoursesComponent },
  {
    path:'sot',
    component:SotBaseComponent,
    children:[
      { path: '', component: SotComponent},
      {path:"dashboard",component:SotDashboardComponent},

    ]
  },
  // { path: 'sot', component: SotComponent},
  // {path:"sot/dashboard",component:SotDashboardComponent},

  {
    path: '',
    component: DashboardBaseComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: 'homework', component: HomeworkComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [5, 0], onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
