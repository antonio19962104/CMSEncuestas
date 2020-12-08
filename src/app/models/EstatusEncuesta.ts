export class EstatusEncuesta{
  
  public _idEstatusEncuesta : number;
  public get idEstatusEncuesta() : number {
    return this._idEstatusEncuesta;
  }
  
  public _descripcion : string;
  public get descripcion() : string {
    return this._descripcion;
  }
  public set descripcion(v : string) {
    this._descripcion = v;
  }
    
}