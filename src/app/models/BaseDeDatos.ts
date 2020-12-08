import { Estatus } from './Estatus';
export class BaseDeDatos{
  
  public _idBaseDeDatos : number;
  public get idBaseDeDatos() : number {
    return this._idBaseDeDatos;
  }

  public _Nombre : string;
  public get Nombre() : string {
    return this._Nombre;
  }
  public set Nombre(v : string) {
    this._Nombre = v;
  }

  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
}