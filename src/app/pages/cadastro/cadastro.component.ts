import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioListar } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  //importei o componente formulário para ser usado aqui
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  //fazendo a injeção de dependencia do service para poder usar os métodos, nesse caso usar o post
  //fazendo injeção de dependencia do router para fazer o caminho de volta a página inicial
  constructor(private usuarioService: UsuarioService, private router: Router){}

  //esse método recebe as informações vindas do componente "formulario" através do "onSubmit"
  criarUsuario(usuario : UsuarioListar){
    //subscribe é porque estamos trabalhando com o observable, por isso sempre colocamos
    //perceba que enviamos o usuario para o método do service
    this.usuarioService.CriarUsuario(usuario).subscribe(response => {
      this.router.navigate(['/']);//quando recebe a resposta nós vamos após para a página inicial
    })
  }

}
