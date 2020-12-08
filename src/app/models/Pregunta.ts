import { Estatus } from './Estatus';
import { TipoControl } from './TipoControl';
export class Pregunta{
  
  public _idPregunta : number;
  public get idPregunta() : number {
    return this._idPregunta;
  }
  
  public _pregunta : string;
  public get pregunta() : string {
    return this._pregunta;
  }
  public set pregunta(v : string) {
    this._pregunta = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
  public _tipoControl : TipoControl;
  public get tipoControl() : TipoControl {
    return this._tipoControl;
  }
  public set tipoControl(v : TipoControl) {
    this._tipoControl = v;
  }
  
}