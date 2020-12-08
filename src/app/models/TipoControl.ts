export class TipoControl{
  
  public _idTipoControl : number;
  public get idTipoControl() : number {
    return this._idTipoControl;
  }
  
  public _descripcion : string;
  public get descripcion() : string {
    return this._descripcion;
  }
  public set descripcion(v : string) {
    this._descripcion = v;
  }
  
}