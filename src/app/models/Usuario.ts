import { Estatus } from './Estatus';
export class Usuario{
  
  public _idUsuario : number;
  public get idUsuario() : number {
    return this._idUsuario;
  }
  
  public _nombre : string;
  public get nombre() : string {
    return this._nombre;
  }
  public set nombre(v : string) {
    this._nombre = v;
  }
  
  public _apellidoPaterno : string;
  public get apellidoPaterno() : string {
    return this._apellidoPaterno;
  }
  public set apellidoPaterno(v : string) {
    this._apellidoPaterno = v;
  }
  
  public _apellidoMaterno : string;
  public get apellidoMaterno() : string {
    return this._apellidoMaterno;
  }
  public set apellidoMaterno(v : string) {
    this._apellidoMaterno = v;
  }
  
  public _password : string;
  public get password() : string {
    return this._password;
  }
  public set password(v : string) {
    this._password = v;
  }
  
  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
}