import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'MainPage',
    pathMatch: 'full'
  },
  {
    path: 'MainPage',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'sobreLaAdopcion',
    loadChildren: () => import('./aboutadoption/aboutadoption.module').then( m => m.AboutadoptionPageModule)
  },
  {
    path: 'AddComment',
    loadChildren: () => import('./addcomment/addcomment.module').then( m => m.AddcommentPageModule)
  },
  {
    path: 'Admin_notifications',
    loadChildren: () => import('./adminnotifications/adminnotifications.module').then( m => m.AdminnotificationsPageModule)
  },
  {
    path: 'colabora',
    loadChildren: () => import('./colabora/colabora.module').then( m => m.ColaboraPageModule)
  },
  {
    path: 'Selected_animal/:animalid',
    loadChildren: () => import('./eleccionanimal/eleccionanimal.module').then( m => m.EleccionanimalPageModule)
  },
  {
    path: 'Forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'gatos',
    loadChildren: () => import('./gatos/gatos.module').then( m => m.GatosPageModule)
  },
  {
    path: 'LogIn',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'Notificated_animal/:animalid',
    loadChildren: () => import('./notificatedanimal/notificatedanimal.module').then( m => m.NotificatedanimalPageModule)
  },
  {
    path: 'nuestrosAnimales',
    loadChildren: () => import('./nuestrosanimales/nuestrosanimales.module').then( m => m.NuestrosanimalesPageModule)
  },
  {
    path: 'ongColaboradoras',
    loadChildren: () => import('./ongcolaboradoras/ongcolaboradoras.module').then( m => m.OngcolaboradorasPageModule)
  },
  {
    path: 'perros',
    loadChildren: () => import('./perros/perros.module').then( m => m.PerrosPageModule)
  },
  {
    path: 'perrosygatos',
    loadChildren: () => import('./perrosygatos/perrosygatos.module').then( m => m.PerrosygatosPageModule)
  },
  {
    path: 'Register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'Register_animal',
    loadChildren: () => import('./registeranimal/registeranimal.module').then( m => m.RegisteranimalPageModule)
  },
  {
    path: 'Register_animal/:animalid',
    loadChildren: () => import('./registeranimal/registeranimal.module').then( m => m.RegisteranimalPageModule)
  },
  {
    path: 'RegisterONG',
    loadChildren: () => import('./registerong/registerong.module').then( m => m.RegisterongPageModule)
  },
  {
    path: 'sobreNosotros',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'News/:newsid',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'Admin_update',
    loadChildren: () => import('./updateanimal/updateanimal.module').then( m => m.UpdateanimalPageModule)
  },
  {
    path: 'Admin_delete',
    loadChildren: () => import('./deleteanimal/deleteanimal.module').then( m => m.DeleteanimalPageModule)
  },
  {
    path: '**',
    redirectTo: 'MainPage',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
