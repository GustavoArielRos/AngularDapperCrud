import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
}
