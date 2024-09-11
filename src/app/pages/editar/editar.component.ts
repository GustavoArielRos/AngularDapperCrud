import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-editar',
  standalone: true,
  //importando o componente formulário
  imports: [FormularioComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  //variavel que irá armazenar os dados do usuário recebidos na requesição
  usuario!: UsuarioListar;


  //fazendo injeções de dependencia
  constructor(private usuarioService:UsuarioService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){

    //pegando o id da URL e transformando em Number
    const id = Number(this.route.snapshot.paramMap.get('id'))
    
    this.usuarioService.GetUsuarioId(id).subscribe(response => {
      this.usuario = response.dados;
    });

  }  

}
