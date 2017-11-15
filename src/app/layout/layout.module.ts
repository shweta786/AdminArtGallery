import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent, SidebarComponent } from '../shared';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LayoutRoutingModule,
    NgbDropdownModule.forRoot() 
  ],
  declarations: [ 
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
