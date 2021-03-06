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
import { MeetusComponent } from './meetus/meetus.component';
import { NewsComponent } from './news/news.component';
import { StoreComponent } from './store/store.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
// angular 6 image zoom
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Test3Component } from './test3/test3.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'test/test3', component: Test3Component},
  { path: 'test/test3/:value', component: Test3Component},
  { path: 'staff', component: StaffComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'meetus', component: MeetusComponent },
  { path: 'news', component: NewsComponent },
  { path: 'store', component: StoreComponent }
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
    EventsComponent,
    MeetusComponent,
    NewsComponent,
    StoreComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    Test3Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CarouselModule.forRoot(),
    NgxImageZoomModule.forRoot(),
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
