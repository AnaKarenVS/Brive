import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from 'src/services/sucursal.service';
import { Sucursal } from './../../models/sucursal.model';

@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})
export class AddSucursalComponent implements OnInit {
  nombreSucu: string;
  sucuName = new FormControl('', [
    Validators.required
  ]);
  constructor(private serviceSucursal: SucursalService) { }

  ngOnInit(): void {
   
  }
  sucursales: Sucursal[] = [
    {
      nombre: 'Sucursal A',
    },
    {
      nombre: 'Sucursal B'
    }
  ];
  saveSucursal(){
    console.log('Soy el nuevo sucursal' + this.sucuName.value);
    if(this.sucuName.valid){
      let data = {
        nombre: this.sucuName.value
      }
      this.sucursales.push(data);
      console.log(this.sucursales)
    }else{
      alert("Introduce un nombre");
      this.nombreSucu = " ";
    }
  }

}
