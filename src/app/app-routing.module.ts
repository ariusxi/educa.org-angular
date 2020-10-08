import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'course', component: CourseComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
