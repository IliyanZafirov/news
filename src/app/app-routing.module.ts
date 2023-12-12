import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', component: AppModule, children: [
      { path: '', component: HeaderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
