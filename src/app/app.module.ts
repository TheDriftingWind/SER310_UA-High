import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShowComponent } from './show/show.component';
import { EventsComponent } from './events/events.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// angular 6 calendar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'events', component: EventsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShowComponent,
    TestComponent,
    StaffComponent,
    HomeComponent,
    StudentsComponent,
    Test2Component,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
