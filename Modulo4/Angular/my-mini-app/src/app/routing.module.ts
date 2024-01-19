import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { AboutComponent } from './pages/public/about/about.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { GuestAuthGuard, LoggedAuthGuard } from './auth/auth.guard';

export const namesRoutes = {
  home: 'home',
  login: 'login',
  about: 'about',
  dashboard: 'dashboard',
  gallery: 'gallery',
  crud: 'crud',
  profile: 'profile',
};

export const routes: Routes = [
  {
    path: namesRoutes.home,
    component: HomeComponent,
    canActivate: [LoggedAuthGuard],
  },
  {
    path: namesRoutes.login,
    component: LoginComponent,
    canActivate: [LoggedAuthGuard],
  },
  {
    path: namesRoutes.about,
    component: AboutComponent,
    canActivate: [LoggedAuthGuard],
  },
  {
    path: namesRoutes.dashboard,
    component: DashboardComponent,
    canActivate: [GuestAuthGuard],
  },
  {
    path: namesRoutes.gallery,
    component: GalleryComponent,
    canActivate: [GuestAuthGuard],
  },
  {
    path: namesRoutes.crud,
    component: CrudComponent,
    canActivate: [GuestAuthGuard],
  },
  {
    path: namesRoutes.profile,
    component: ProfileComponent,
    canActivate: [GuestAuthGuard],
  },
  //{path: '**', component: PageNotFoundComponent}
  { path: '', redirectTo: `/${namesRoutes.home}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
