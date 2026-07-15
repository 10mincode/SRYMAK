import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppserviceService } from './appservice.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { ToastComponent } from './toast/toast.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqsComponent } from './faqs/faqs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlSerializer } from '@angular/router';
import { CustomUrlSerializer } from './CustomUrlSerializer';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ReviewComponent } from './review/review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizMultiplayerComponent } from './quiz-multiplayer/quiz-multiplayer.component';
import { HomeworkComponent } from './homework/homework.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { QuizTeacherComponent } from './quiz-teacher/quiz-teacher.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { SestComponent } from './sest/sest.component';
import { SotComponent } from './sot/sot.component';
import { SotDashboardComponent } from './sot-dashboard/sot-dashboard.component';
import { SotBaseComponent } from './sot-base/sot-base.component';
import { HomeworkCardComponent } from './homework-card/homework-card.component';
import { TeacherHomeworkUploadComponent } from './teacher-homework-upload/teacher-homework-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    HomePageComponent,
    HeaderComponent,
    CourseCardComponent,
    CoursesComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    VideoChatComponent,
    ToastComponent,
    FaqsComponent,
    DashboardComponent,
    ReviewComponent,
    ReviewsComponent,
    DashboardBaseComponent,
    ProfileComponent,
    QuizMultiplayerComponent,
    HomeworkComponent,
    QuizTeacherComponent,
    QuizSelectionComponent,
    SestComponent,
    SotComponent,
    SotDashboardComponent,
    SotBaseComponent,
    HomeworkCardComponent,
    TeacherHomeworkUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,

  ],
  providers: [AppserviceService, CookieService, { provide: UrlSerializer, useClass: CustomUrlSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
