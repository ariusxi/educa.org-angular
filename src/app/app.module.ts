import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';

import { HomeComponent } from './pages/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { CardTeacherComponent } from './components/card-teacher/card-teacher.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from './pages/course/course.component';

@NgModule({
  declarations: [
    // Components
    IconComponent,
    NavbarComponent,
    ParallaxComponent,
    CardCourseComponent,
    CardTeacherComponent,
    CourseListComponent,
    CourseItemComponent,
    FooterComponent,
    // Pages
    HomeComponent,
    AppComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
