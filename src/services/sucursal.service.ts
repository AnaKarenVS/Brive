import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Sucursal } from './../models/sucursal.model';
@Injectable({
  providedIn: 'root'
})
export class SucursalService implements SucursalService {

  constructor() { }


  getSucursales(){
      const heroes = [
        {nombre: 'A' },
        {nombre: 'B' },
      ];
      return heroes;

  }
}
