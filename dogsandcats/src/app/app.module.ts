import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ForumCommentComponent } from './forum-comment/forum-comment.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewsComponent } from './news/news.component';
import { OurAnimalsComponent } from './our-animals/our-animals.component';
import { LoggingComponent } from './logging/logging.component';
import { RegisterComponent } from './register/register.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OngColabComponent } from './ong-colab/ong-colab.component';
import { RegisterONGComponent } from './register-ong/register-ong.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColaboraComponent } from './colabora/colabora.component';
import { AboutadoptionComponent } from './aboutadoption/aboutadoption.component';
import { NotificatedAnimalComponent } from './notificated-animal/notificated-animal.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { TodosAnimalesComponent } from './todos-animales/todos-animales.component';
import { SelectedanimalComponent } from './selectedanimal/selectedanimal.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from 'src/environments/environment';
import { MainpagecerrarsesionComponent } from './mainpagecerrarsesion/mainpagecerrarsesion.component';
import { MainpageAdminComponent } from './mainpage-admin/mainpage-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    ForumCommentComponent,
    MainpageComponent,
    NewsComponent,
    OurAnimalsComponent,
    LoggingComponent,
    RegisterComponent,
    AddAnimalComponent,
    AboutUsComponent,
    OngColabComponent,
    RegisterONGComponent,
    ColaboraComponent,
    AboutadoptionComponent,
    NotificatedAnimalComponent,
    AdminNotificationsComponent,
    PerrosComponent,
    GatosComponent,
    TodosAnimalesComponent,
    SelectedanimalComponent,
    AllnewsComponent,
    MainpagecerrarsesionComponent,
    MainpageAdminComponent,
    UpdateAdminComponent,
    DeleteAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
