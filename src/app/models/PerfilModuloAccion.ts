import { PerfilModulo } from './PerfilModulo'
export class PerfilModuloAccion{
  
  public _idPerfilModuloAccion : string;
  public get idPerfilModuloAccion() : string {
    return this._idPerfilModuloAccion;
  }
  
  public _perfilModulo : PerfilModulo;
  public get perfilModulo() : PerfilModulo {
    return this._perfilModulo;
  }
  public set perfilModulo(v : PerfilModulo) {
    this._perfilModulo = v;
  }
  
  public _accion : string;
  public get accion() : string {
    return this._accion;
  }
  public set accion(v : string) {
    this._accion = v;
  }
      
}