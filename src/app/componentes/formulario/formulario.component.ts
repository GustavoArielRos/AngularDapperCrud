import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  //importando para podermos usar o routerlink que é a mudança de página
  //formsmodule e reactiveformsmodule para formulario
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  //se é criação ou adição
  @Input() btnAcao!: string;//cadastrar ou editar
  @Input() descTitulo!: string;//titulo que aparece

  //dadosUsuario irá receber dados vindos do componente Editar
  @Input() dadosUsuario : UsuarioListar | null = null

  //onSubmit é o nome que damos
  //EventEmitter ou seja é um objeto que emite um tipo e nesse caso emite para fora
  //o tipo é UsuarioListar
  @Output() onSubmit = new EventEmitter<UsuarioListar>();

  //variável que representa o formulário
  usuarioForm!:FormGroup;

  ngOnInit(): void {

    //aqui criamos o objeto que possuem as propriedades que serão mapeadas dentro do formulário
    this.usuarioForm = new FormGroup({
      //realizando um ternário porque esse formulário trabalha tanto com input quanto output
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),//porque no cadastro você não preenche essa informação
      nomeCompleto: new FormControl(this.dadosUsuario ? this.dadosUsuario.nomeCompleto : ''),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : ''),
      cargo: new FormControl(this.dadosUsuario ? this.dadosUsuario.cargo : ''),
      salario: new FormControl(this.dadosUsuario ? this.dadosUsuario.salario : 0),//ele é um numeral
      cpf: new FormControl(this.dadosUsuario ? this.dadosUsuario.cpf : ''),
      situacao: new FormControl(this.dadosUsuario ? this.dadosUsuario.situacao : true),//ele é um booleano
      senha: new FormControl(this.dadosUsuario ? this.dadosUsuario.senha : ''),
    });

  }

  //méotod que é acionado quando ocorre um submit no html
  submit(){
    //ele emite com  o "onSubmit" o valor do "usuarioForm"
    this.onSubmit.emit(this.usuarioForm.value);
  }



}
