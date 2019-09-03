import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActiveTabComponent } from './active-tab/active-tab.component';
import { ArchiveTabComponent } from './archive-tab/archive-tab.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'active',
        component: ActiveTabComponent
      },
      {
        path: 'archive',
        component: ArchiveTabComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'active'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
