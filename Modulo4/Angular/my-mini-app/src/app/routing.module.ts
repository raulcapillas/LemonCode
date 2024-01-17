import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { AboutComponent } from './pages/public/about/about.component';

const namesRoutes = {
  home: 'home',
  login: 'login',
  about: 'about',
}

export const routes: Routes = [
  { path: namesRoutes.home, component: HomeComponent },
  { path: namesRoutes.login, component: LoginComponent },
  { path: namesRoutes.about, component: AboutComponent},
  //{path: '**', component: PageNotFoundComponent}
  { path: '',   redirectTo: `/${namesRoutes.home}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
