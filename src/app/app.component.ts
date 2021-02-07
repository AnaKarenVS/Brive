import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { SucursalService } from 'src/services/sucursal.service';
import { Sucursal } from './../models/sucursal.model';
import { Producto } from './../models/producto.model';
import { ProductoService } from './../services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-Brive';
  nombreSucu: string;
  sucursales: Sucursal[];
  productosA: Producto[];
  productosB: Producto[];


  constructor(
    private serviceSucursal: SucursalService, private productoService: ProductoService) {}
  ngOnInit() {
    this.getDataSucursales();
    this.getProductosA();
    this.getProductosB();
   
  }
// tslint:disable-next-line: typedef
saveSucursal(){
    console.log('Soy el nuevo sucursal' + this.nombreSucu);
  }

// tslint:disable-next-line: typedef
getDataSucursales(){
  console.log('aqui va la data');
  this.sucursales = this.serviceSucursal.getSucursales();
  console.log(JSON.stringify(this.sucursales));
}

addSucursal()
{
  //un push al array para agregar la sucursal

}

getProductosA(){
  //this.productosA = this.productoService.getProductosA();
  console.log(JSON.stringify(this.productosA));
}

getProductosB(){
  this.productosB = this.productoService.getProductosB();
  console.log(JSON.stringify(this.productosB));
}
addProducto(){

}
}

