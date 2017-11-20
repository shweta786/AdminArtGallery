import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatModule } from '../../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardRoutingModule,
    StatModule
  ],
  declarations: [
    DashboardComponent, 
    ChatComponent, 
    NotificationComponent, 
    TimelineComponent
  ]
})
export class DashboardModule { }
