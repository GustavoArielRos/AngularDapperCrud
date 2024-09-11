import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UsuarioListar } from '../models/Usuario';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //usando a variável de ambiente(aquela que possui a URL da api do backend)
  ApiUrl = environment.UrlApi;

  //recebendo o httpcliet através da variável http
  constructor(private http : HttpClient) { }

  //método get usuários( para pegar o endpoint do get la da api e pegar as informações)
  //Observable(espera a requisição dos dados antes de agir)
  //esse método retorna um tipo de ResponseUsuarioListar
  //esse Response e UsuarioListar são os tipos de objetos que eu criei na Model
  GetUsuarios(): Observable<Response<UsuarioListar[]>>{
    //indo no método get atráves da Url(ApiUrl) e pegando a lista
    return this.http.get<Response<UsuarioListar[]>>(this.ApiUrl);
  }

  //método delete(para pegar o endpoint do delete la da api e pegar as informações)
  //retorna a lista de usuarios, porém sem aquele que foi deletado
  //recebe como parâmetro um number
  DeletarUsuario(id:number | undefined) : Observable<Response<UsuarioListar[]>>{
    //a ulr é API + ?usuariosId=numero
    return this.http.delete<Response<UsuarioListar[]>>(`${this.ApiUrl}?usuariosId=${id}`);
  }

  //método post(para pegar o endpoint do delete la da api e pegar as informações)
  //retorna a lista com todos os usuários
  CriarUsuario(usuario: UsuarioListar) : Observable<Response<UsuarioListar[]>>{
    //vai retorna essa lista de usuário que recebe como parametro a URL e as informações do usuário
    //é essa linha que se comunica com a api, por isso ela envia esses parâmetros
    return this.http.post<Response<UsuarioListar[]>>(this.ApiUrl, usuario)
  }

  //método get(por id)(para pegar o endpoint do delete la da api e pegar as informações)
  GetUsuarioId(id:number) : Observable<Response<UsuarioListar>>{
    //a ulr é API + id
    return this.http.get<Response<UsuarioListar>>(`${this.ApiUrl}/${id}`);
  }
}
