export class Result{
  
  private _Correct : boolean;
  public get Correct() : boolean {
    return this._Correct;
  }
  public set Correct(v : boolean) {
    this._Correct = v;
  }
  
  private _errorMessage : string;
  public get errorMessage() : string {
    return this._errorMessage;
  }
  public set errorMessage(v : string) {
    this._errorMessage = v;
  }
  
  private _object : Object;
  public get object() : Object {
    return this._object;
  }
  public set object(v : Object) {
    this._object = v;
  }
  
  private _list : Object;
  public get list() : Object {
    return this._list;
  }
  public set list(v : Object) {
    this._list = v;
  }
  
  
}