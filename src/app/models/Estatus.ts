export class Estatus{
  
  public _idEstatus : number;
  public get idEstatus() : number {
    return this._idEstatus;
  }

  public _descripcion : string;
  public get descripcion() : string {
    return this._descripcion;
  }
  public set descripcion(v : string) {
    this._descripcion = v;
  }
  
}