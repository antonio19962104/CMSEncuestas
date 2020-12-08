import { Encuesta } from './Encuesta';
import { Pregunta } from './Pregunta';
export class EncuestaPregunta{
  
  public _idEncuestaPregunta : string;
  public get idEncuestaPregunta() : string {
    return this._idEncuestaPregunta;
  }
  
  public _encuesta : Encuesta;
  public get encuesta() : Encuesta {
    return this._encuesta;
  }
  public set encuesta(v : Encuesta) {
    this._encuesta = v;
  }
  
  public _pregunta : Pregunta;
  public get pregunta() : Pregunta {
    return this._pregunta;
  }
  public set pregunta(v : Pregunta) {
    this._pregunta = v;
  }
  
  
}