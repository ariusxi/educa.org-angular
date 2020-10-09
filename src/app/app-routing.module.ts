import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'course', component: CourseComponent, data: {title: 'Curso'}},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
