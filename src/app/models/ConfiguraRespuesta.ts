import { Estatus } from './Estatus';
import { Encuesta } from './Encuesta';
import { Pregunta } from './Pregunta';
import { Respuesta } from "./Respuesta";
export class ConfiguraRespuesta{
  
  public _idConfiguraRespuesta : number;
  public get idConfiguraRespuesta() : number {
    return this._idConfiguraRespuesta;
  }
  
  public _encuesta : Encuesta;
  public get encuesta() : Encuesta {
    return this._encuesta;
  }
  public set encuesta(v : Encuesta) {
    this._encuesta = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
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
  
}