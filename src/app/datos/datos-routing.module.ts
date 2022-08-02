import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'datos/login',
    component: LoginComponent,
  },
  {
    path: 'datos/home',
    component: HomeComponent,
  },
  {
    path: 'datos/create',
    component: CreateComponent,
  },
  {
    path:'datos/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosRoutingModule { }
