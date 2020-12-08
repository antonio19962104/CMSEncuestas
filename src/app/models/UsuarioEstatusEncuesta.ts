import { Encuesta } from './Encuesta';
import { Usuario } from './Usuario';
export class UsuarioEstatusEncuesta{
  
  public _idUsuarioEstatusEncuesta : number;
  public get idUsuarioEstatusEncuesta() : number {
    return this._idUsuarioEstatusEncuesta;
  }
  
  public _encuesta : Encuesta;
  public get encuesta() : Encuesta {
    return this._encuesta;
  }
  public set encuesta(v : Encuesta) {
    this._encuesta = v;
  }
  
  public _usuario : Usuario;
  public get usuario() : Usuario {
    return this._usuario;
  }
  public set usuario(v : Usuario) {
    this._usuario = v;
  }
  
}