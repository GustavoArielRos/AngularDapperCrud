import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //usando a variável de ambiente(aquela que possui a URL da api do backend)
  ApiUrl = environment.UrlApi;

  constructor() { }
}
