import { Estatus } from './Estatus';
import { Plantilla } from './Plantilla';
import { BaseDeDatos } from "./BaseDeDatos";
export class Encuesta{
  
  public _idEncuesta : number;
  public get idEncuesta() : number {
    return this._idEncuesta;
  }
  
  public _nombre : string;
  public get nombre() : string {
    return this._nombre;
  }
  public set nombre(v : string) {
    this._nombre = v;
  }

  
  private _uid : string;
  public get uid() : string {
    return this._uid;
  }
  public set uid(v : string) {
    this._uid = v;
  }
  

  public _estatus : Estatus;
  public get estatus() : Estatus {
    return this._estatus;
  }
  public set estatus(v : Estatus) {
    this._estatus = v;
  }
  
  public _fechaInicio : Date;
  public get fechaInicio() : Date {
    return this._fechaInicio;
  }
  public set fechaInicio(v : Date) {
    this._fechaInicio = v;
  }

  public _fechaFin : Date;
  public get fechaFin() : Date {
    return this._fechaFin;
  }
  public set fechaFin(v : Date) {
    this._fechaFin = v;
  }
  
  public _preguntaCondicion : boolean;
  public get preguntaCondicion() : boolean {
    return this._preguntaCondicion;
  }
  public set preguntaCondicion(v : boolean) {
    this._preguntaCondicion = v;
  }
  
  public _plantilla : Plantilla;
  public get plantilla() : Plantilla {
    return this._plantilla;
  }
  public set plantilla(v : Plantilla) {
    this._plantilla = v;
  }
  
  public _baseDeDatos : BaseDeDatos;
  public get baseDeDatos() : BaseDeDatos {
    return this._baseDeDatos;
  }
  public set baseDeDatos(v : BaseDeDatos) {
    this._baseDeDatos = v;
  }

  
  private _idBaseDeDatos : number;
  public get idBaseDeDatos() : number {
    return this._idBaseDeDatos;
  }
  public set idBaseDeDatos(v : number) {
    this._idBaseDeDatos = v;
  }
  
  
  public _instruccion : string;
  public get instruccion() : string {
    return this._instruccion;
  }
  public set instruccion(v : string) {
    this._instruccion = v;
  }
  
  public _imagenInstruccion : string;
  public get imagenInstruccion() : string {
    return this._imagenInstruccion;
  }
  public set imagenInstruccion(v : string) {
    this._imagenInstruccion = v;
  }
  
  public _agradecimiento : string;
  public get agradecimiento() : string {
    return this._agradecimiento;
  }
  public set agradecimiento(v : string) {
    this._agradecimiento = v;
  }
  
  public _imagenAgradecimiento : string;
  public get imagenAgradecimiento() : string {
    return this._imagenAgradecimiento;
  }
  public set imagenAgradecimiento(v : string) {
    this._imagenAgradecimiento = v;
  }
  
}