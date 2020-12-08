import { Encuesta } from './Encuesta';
import { Pregunta } from './Pregunta';
import { Respuesta } from './Respuesta';
import { Usuario } from './Usuario';
export class UsuarioRespuestas{
  public _idUsuarioRespuestas : number;
  public get idUsuarioRespuestas() : number {
    return this._idUsuarioRespuestas;
  }
  
  public _respuestaUsuario : string;
  public get respuestaUsuario() : string {
    return this._respuestaUsuario;
  }
  public set respuestaUsuario(v : string) {
    this._respuestaUsuario = v;
  }
  
  public _pregunta : Pregunta;
  public get pregunta() : Pregunta {
    return this._pregunta;
  }
  public set pregunta(v : Pregunta) {
    this._pregunta = v;
  }
  
  public _respuesta : Respuesta;
  public get respuesta() : Respuesta {
    return this._respuesta;
  }
  public set respuesta(v : Respuesta) {
    this._respuesta = v;
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