import { Estatus } from './Estatus';
export class Company{
  
  public _idCompany : number;
  public get idCompany() : number {
    return this._idCompany;
  }
  
  public _companyName : string;
  public get companyName() : string {
    return this._companyName;
  }
  public set companyName(v : string) {
    this._companyName = v;
  }

  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
}