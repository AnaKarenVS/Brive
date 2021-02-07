import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Producto } from 'src/models/producto.model';
import { ProductoService } from './../../services/producto.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      cantidad: [''],
      precio: ['', Validators.required],
    });
  }

  arrayProductos: Producto[] = [
    {
      nombre: 'Cafe legal',
      codigo: 10010,
      cantidad: 5,
      precio: 7,
    },
    {
      nombre: 'Chocolate Abuelita',
      codigo: 10011,
      cantidad: 6,
      precio: 15,
    },
    {
      nombre: 'Bonafina',
      codigo: 10012,
      cantidad: 1,
      precio: 12,
    },
  ];
  
  edit(item : Producto){
    this.productoForm.setValue(item);
  }

  addProducto() {

    this.arrayProductos.push(this.productoForm.value);
    console.log(JSON.stringify(this.arrayProductos));
  }

  clearForm(){
    this.productoForm.reset();
  }
}
