import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: DashboardComponent,
   loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'client', component: DashboardComponent,
   loadChildren: ()=>import('./client/client.module').then(m => m.ClientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
