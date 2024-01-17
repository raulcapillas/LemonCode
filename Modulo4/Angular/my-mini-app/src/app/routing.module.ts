import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { AboutComponent } from './pages/public/about/about.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { authGuard } from './auth/auth.guard';

export const namesRoutes = {
  home: 'home',
  login: 'login',
  about: 'about',
  dashboard: 'dashboard',
  gallery: 'gallery',
  crud: 'crud',
  profile: 'profile',
}

export const routes: Routes = [
  { path: namesRoutes.home, component: HomeComponent },
  { path: namesRoutes.login, component: LoginComponent },
  { path: namesRoutes.about, component: AboutComponent},
  { path: namesRoutes.dashboard, component: DashboardComponent, canActivate: [authGuard]},
  { path: namesRoutes.gallery, component: GalleryComponent},
  { path: namesRoutes.crud, component: CrudComponent},
  { path: namesRoutes.profile, component: ProfileComponent},
  //{path: '**', component: PageNotFoundComponent}
  { path: '',   redirectTo: `/${namesRoutes.home}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
