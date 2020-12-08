import { Modulo } from './Modulo';
import { PerfilD4U } from './PerfilD4U';
export class PerfilModulo{
  
  public _idPerfilModulo : number;
  public get idPerfilModulo() : number {
    return this._idPerfilModulo;
  }
  
  public _perfilD4U : PerfilD4U;
  public get perfilD4U() : PerfilD4U {
    return this._perfilD4U;
  }
  public set perfilD4U(v : PerfilD4U) {
    this._perfilD4U = v;
  }
  
  public _modulo : Modulo;
  public get modulo() : Modulo {
    return this._modulo;
  }
  public set modulo(v : Modulo) {
    this._modulo = v;
  }
  
}