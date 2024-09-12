import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
    {path:'cadastro', component: CadastroComponent},
    //rota principal
    {path:'', component: HomeComponent},
    //temos que colocar o "id" pois essa informação tem que ser passada no caminho(url) que acessa ela
    {path:'editar/:id',component: EditarComponent},
    {path:'detalhes/:id', component: DetalhesComponent}
    
];
