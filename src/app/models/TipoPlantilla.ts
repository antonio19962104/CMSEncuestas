export class TipoPlantilla{
  
  public _idTipoPlantilla : number;
  public get idTipoPlantilla() : number {
    return this._idTipoPlantilla;
  }
  public set idTipoPlantilla(v : number) {
    this._idTipoPlantilla = v;
  }
  
  public _descripcion : string;
  public get descripcion() : string {
    return this._descripcion;
  }
  public set descripcion(v : string) {
    this._descripcion = v;
  }
  
}