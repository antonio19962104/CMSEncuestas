import { Estatus } from './Estatus'
import { FooterPlantilla } from './FooterPlantilla';
import { HeaderPlantilla } from './HeaderPlantilla';
import { TipoPlantilla } from './TipoPlantilla';
export class Plantilla{
  
  public _idPlantilla : number;
  public get idPlantilla() : number {
    return this._idPlantilla;
  }
  
  public _nombre : string;
  public get nombre() : string {
    return this._nombre;
  }
  public set nombre(v : string) {
    this._nombre = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
  public _footerPlantilla : FooterPlantilla;
  public get footerPlantilla() : FooterPlantilla {
    return this._footerPlantilla;
  }
  public set footerPlantilla(v : FooterPlantilla) {
    this._footerPlantilla = v;
  }
  
  public _headerPlantilla : HeaderPlantilla;
  public get headerPlantilla() : HeaderPlantilla {
    return this._headerPlantilla;
  }
  public set headerPlantilla(v : HeaderPlantilla) {
    this._headerPlantilla = v;
  }
  
  public _tipoPlantilla : TipoPlantilla;
  public get tipoPlantilla() : TipoPlantilla {
    return this._tipoPlantilla;
  }
  public set tipoPlantilla(v : TipoPlantilla) {
    this._tipoPlantilla = v;
  }
  
}