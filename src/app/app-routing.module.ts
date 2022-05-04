import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './home/app-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
