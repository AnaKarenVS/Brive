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
        {nombre: 'Dr Nice' },
        {nombre: 'Narco' },
        {nombre: 'Bombasto' },
        {nombre: 'Celeritas' },
        {nombre: 'Magneta' },
        {nombre: 'RubberMan' },
        {nombre: 'Dynama' },
        {nombre: 'Dr IQ' },
        {nombre: 'Magma' },
        {nombre: 'Tornado' }
      ];
      return heroes;

  }
}
