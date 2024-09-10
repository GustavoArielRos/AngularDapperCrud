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
}
