import { Estatus } from './Estatus'
export class CompanyCategoria{
  
  public _idCompanyCategoria : number;
  public get idCompanyCategoria() : number {
    return this._idCompanyCategoria;
  }
  
  public _descripcion : string;
  public get descripcion() : string {
    return this._descripcion;
  }
  public set descripcion(v : string) {
    this._descripcion = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
}