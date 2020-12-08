import { Estatus } from './Estatus';
export class Administrador{

  public _idAdministrador : number;
  public get idAdministrador() : number {
    return this._idAdministrador;
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
  
  public _username : string;
  public get username() : string {
    return this._username;
  }
  public set username(v : string) {
    this._username = v;
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