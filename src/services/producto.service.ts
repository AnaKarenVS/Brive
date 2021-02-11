import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductosA(){
      const Productos = [
        {
          nombre: 'Cafe legal', 
          codigo: 10010, 
          cantidad: 5, 
          precio: 7
        },
        {
          nombre: 'Chocolate Abuelita',
          codigo: 10011, 
          cantidad: 6, 
          precio: 15
        },
        {
          nombre: 'Bonafina', 
          codigo: 10012, 
          cantidad: 1, 
          precio: 12
        }
      ];
      return Productos;

  }

  getProductosB(){
    const Productos = [
      
    ];
    return Productos;

}


}

