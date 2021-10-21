import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FIREBASE IMPORTS//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//ENVIRONMENT VARIABLES
import { environment } from '../environments/environment.prod'

//FORM IMPORTS//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaPacienteComponent } from './componentes/alta-paciente/alta-paciente.component';
import { AltaEspecialistaComponent } from './componentes/alta-especialista/alta-especialista.component';
import { AltaAdministradorComponent } from './componentes/alta-administrador/alta-administrador.component';
import { HomeComponent } from './paginas/home/home.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { MisTurnosComponent } from './paginas/mis-turnos/mis-turnos.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';
import { SolicitarTurnoComponent } from './paginas/solicitar-turno/solicitar-turno.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { MyFabComponent } from './componentes/my-fab/my-fab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonStyleDirective } from './directives/button-style.directive';
import { CardStyleDirective } from './directives/card-style.directive';
import { FontStyleDirective } from './directives/font-style.directive';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';
//MATERIAL
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { SpecialityImgFormatterPipe } from './pipes/speciality-img-formatter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AltaPacienteComponent,
    AltaEspecialistaComponent,
    AltaAdministradorComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    UsuariosComponent,
    MisTurnosComponent,
    TurnosComponent,
    SolicitarTurnoComponent,
    MiPerfilComponent,
    MyFabComponent,
    ButtonStyleDirective,
    CardStyleDirective,
    FontStyleDirective,
    DateFormatterPipe,
    SpecialityImgFormatterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, //FIRESTORE
    AngularFireStorageModule, //STORAGE
    AngularFireAuthModule, 
    BrowserAnimationsModule, //AUTH
    SharedModuleModule,
    //MATERIAL
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
