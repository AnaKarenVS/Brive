import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Producto } from 'src/models/producto.model';
import { ProductoService } from './../../services/producto.service';
import { Output, EventEmitter } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productoForm: FormGroup;
  editForm: FormGroup;
  modalRef: BsModalRef;
  modalEdit: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      cantidad: ['', Validators.pattern[0 - 9]],
      precio: [''],
    });
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      cantidad: ['', Validators.pattern[0 - 9]],
      precio: [''],
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

  edit(item: Producto, editTemplate: TemplateRef<any>) {
    this.modalEdit = this.modalService.show(editTemplate);
    this.editForm.setValue(item);
  }

  addProducto() {
    if (this.productoForm.invalid) {
      alert("El formulario esta vacio o es invalido");
    } else {
      this.arrayProductos.push(this.productoForm.value);
      this.productoForm.reset();
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modificarProducto() {
    for (let i = 0; this.arrayProductos.length; i++) {
      if (this.arrayProductos[i].codigo == this.editForm.get('codigo').value) {
        this.arrayProductos[i].cantidad = this.editForm.get('cantidad').value;
        break;
      }
    }
  }
  borrarProducto(item: Producto) {
    if (confirm('Deseas Eliminarlo?')) {
      this.arrayProductos = this.arrayProductos.filter((x, index) => x != item);
      this.productoForm.reset();
    }
  }

  clearForm() {
    this.productoForm.reset();
  }
}