import { Estatus } from "./Estatus";
export class DetallePlantilla{
  
  public _idDetallePlantilla : number;
  public get idDetallePlantilla() : number {
    return this._idDetallePlantilla;
  }
  
  public _nombre : string;
  public get nombre() : string {
    return this._nombre;
  }
  public set nombre(v : string) {
    this._nombre = v;
  }
  
  public _codeHtml : string;
  public get codeHtml() : string {
    return this._codeHtml;
  }
  public set codeHtml(v : string) {
    this._codeHtml = v;
  }
  
  public _imagenIco : string;
  public get imagenIco() : string {
    return this._imagenIco;
  }
  public set imagenIco(v : string) {
    this._imagenIco = v;
  }
  
  public _thumbImage : string;
  public get thumbImage() : string {
    return this._thumbImage;
  }
  public set thumbImage(v : string) {
    this._thumbImage = v;
  }
  
  public _color1 : string;
  public get color1() : string {
    return this._color1;
  }
  public set color1(v : string) {
    this._color1 = v;
  }
  
  public _color2 : string;
  public get color2() : string {
    return this._color2;
  }
  public set color2(v : string) {
    this._color2 = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
}