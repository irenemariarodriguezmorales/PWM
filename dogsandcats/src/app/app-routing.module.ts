import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoggingComponent } from './logging/logging.component';
import { OngColabComponent } from './ong-colab/ong-colab.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OurAnimalsComponent } from './our-animals/our-animals.component';
import { ForumComponent } from './forum/forum.component';
import { ForumCommentComponent } from './forum-comment/forum-comment.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { AboutadoptionComponent } from './aboutadoption/aboutadoption.component';
import { NewsComponent } from './news/news.component';
import { RegisterONGComponent } from './register-ong/register-ong.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { NotificatedAnimalComponent } from './notificated-animal/notificated-animal.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { TodosAnimalesComponent } from './todos-animales/todos-animales.component';
import { SelectedanimalComponent } from './selectedanimal/selectedanimal.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { MainpagecerrarsesionComponent } from './mainpagecerrarsesion/mainpagecerrarsesion.component';
import { MainpageAdminComponent } from './mainpage-admin/mainpage-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  {path: 'LogIn', component: LoggingComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'sobreNosotros', component: AboutUsComponent},
  {path: 'colabora', component: ColaboraComponent},
  {path: 'ongColaboradoras', component: OngColabComponent},
  {path: 'MainPage', component: MainpageComponent},
  {path: 'mainpagecerrarsesion', component: MainpagecerrarsesionComponent},
  {path: '', component: MainpageComponent},
  {path: 'nuestrosAnimales', component: OurAnimalsComponent},
  {path: 'perros', component: PerrosComponent},
  {path: 'gatos', component: GatosComponent},
  {path: 'perrosygatos', component: TodosAnimalesComponent},
  {path: 'Forum', component: ForumComponent},
  {path: 'AddComment', component: ForumCommentComponent},
  {path: 'sobreLaAdopcion', component: AboutadoptionComponent},
  {path: 'News/:newid', component: NewsComponent},
  {path: 'RegisterONG', component: RegisterONGComponent},
  {path: 'Register_animal', component: AddAnimalComponent},
  {path: 'Register_animal/:animalid', component: AddAnimalComponent},
  {path: 'Notificated_animal/:animalid', component: NotificatedAnimalComponent},
  {path: 'Selected_animal/:animalid', component: SelectedanimalComponent},
  {path: 'Admin_notifications', component: AdminNotificationsComponent},
  {path: 'Allnews', component: AllnewsComponent},
  {path: 'Mainpage_admin', component: MainpageAdminComponent},
  {path: 'Admin_update', component: UpdateAdminComponent},
  {path: 'Admin_delete', component: DeleteAdminComponent},
  // Ir añadiendo
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
