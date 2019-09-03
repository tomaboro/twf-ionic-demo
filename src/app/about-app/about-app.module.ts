import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAppRoutingModule } from './about-app-routing.module';
import { AboutAppComponent } from './about-app.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AboutAppComponent
  ],
  imports: [
    CommonModule,
    AboutAppRoutingModule,
    IonicModule
  ]
})
export class AboutAppModule { }
