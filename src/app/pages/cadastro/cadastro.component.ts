import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  //importei o componente formulário para ser usado aqui
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
