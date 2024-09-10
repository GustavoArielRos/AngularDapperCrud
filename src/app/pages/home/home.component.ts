import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  //importando o routerModule para conseguirmos trocar de página
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  //variavel que vai receber a lista de usuarios
  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];

  //fazendo a injeção de dependencia
  //agora através do serviceUsuario eu consigo usar todos os metodos do usuarioService
  constructor(private serviceUsuario:UsuarioService){}

  //método que é roda quando se inicia o componente
  ngOnInit(): void {
    
    //subcribe é sempre usado quando o método retorna um observable
    //variavel response possui o resultado da requisição
    this.serviceUsuario.GetUsuarios().subscribe(response => {
        this.usuarios = response.dados;
        this.usuariosGeral = response.dados;
        console.log(response);
    })
  }

  //esse método recebe um evento( no caso são as informações do evento input)
  search(event:Event){

    //pegando o input inteiro
    const target = event.target as HTMLInputElement;
    //pegando o valor dentro do input
    const value = target.value.toLowerCase();

    //estou filtrando os dados do usuarios para voltar o que eu quero
    this.usuarios = this.usuariosGeral.filter(usuario => {
      //nomeCompleto tem que ser igual ao do que esta no input
      return usuario.nomeCompleto.toLowerCase().includes(value);
    })

  }

  //esse método recebe um número do button
  deletar(id:number | undefined){
    this.serviceUsuario.DeletarUsuario(id).subscribe(response => {
      window.location.reload()//para recarregar a página após deletar a pessoa
    })
  }

}
