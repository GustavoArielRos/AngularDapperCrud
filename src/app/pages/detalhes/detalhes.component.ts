import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  //par poder usar a navegação por páginas
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  //variável que vai receber as informações da requisição
  usuario!:UsuarioListar;


  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute){}

  ngOnInit(): void {
    //pegando o valor do id que esta na URL da página e transformando em um "number"
    const id = Number(this.route.snapshot.paramMap.get('id'));

    //esse método chama o método do service 
    this.usuarioService.GetUsuarioId(id).subscribe(response => {
      //armazenando os dados vindo do response na variável
      this.usuario = response.dados;
    })
  }


}
