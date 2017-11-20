import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page.component';
import { BlankPageRoutingModule } from './blank-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
