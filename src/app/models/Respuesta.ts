import { Estatus } from "./Estatus";
export class Respuesta{
  
  public _idRespuesta : number;
  public get idRespuesta() : number {
    return this._idRespuesta;
  }
  
  public _respuesta : string;
  public get respuesta() : string {
    return this._respuesta;
  }
  public set respuesta(v : string) {
    this._respuesta = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
}