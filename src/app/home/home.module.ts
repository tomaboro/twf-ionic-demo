import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { ActiveTabComponent } from './active-tab/active-tab.component';
import { ArchiveTabComponent } from './archive-tab/archive-tab.component';
import { CardComponent } from './card/card.component';
import { NewCardComponent } from './new-card/new-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ActiveTabComponent,
    ArchiveTabComponent,
    CardComponent,
    NewCardComponent
  ],
  entryComponents: [
    NewCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class HomeModule { }
