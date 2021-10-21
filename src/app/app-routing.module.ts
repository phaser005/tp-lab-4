import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAdministradorComponent } from './componentes/alta-administrador/alta-administrador.component';
import { AltaEspecialistaComponent } from './componentes/alta-especialista/alta-especialista.component';
import { AltaPacienteComponent } from './componentes/alta-paciente/alta-paciente.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', 
  component: HomeComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'alta-paciente', 
    component: AltaPacienteComponent 
  },
  { 
    path: 'alta-especialista', 
    component: AltaEspecialistaComponent 
  },
  { 
    path: 'alta-administrador', 
    component: AltaAdministradorComponent 
  },
  { 
    path: 'mi-perfil', 
    component: MiPerfilComponent 
  },
  { 
    path: 'usuarios', 
    component: UsuariosComponent 
  },
  { path: 'turnos', loadChildren: () => import('./lazyLoading/turns-module/turns-module.module').then(m => m.TurnsModuleModule) },
  { path: 'registro', loadChildren: () => import('./lazyLoading/register-module/register-module.module').then(m => m.RegisterModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
