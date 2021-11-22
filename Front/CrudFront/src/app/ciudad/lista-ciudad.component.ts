import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { CiudadService } from '../service/ciudad.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-ciudad',
  templateUrl: './lista-ciudad.component.html',
  styleUrls: ['./lista-ciudad.component.css']
})
export class ListaCiudadComponent implements OnInit {

  ciudades: Ciudad[] = [];

  constructor(
    private ciudadService: CiudadService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarCiudades();
  }

  cargarCiudades(): void{
    this.ciudadService.lista().subscribe(
      data => {
        this.ciudades = data
      },
      err =>{
        console.log(err);
      }
    );
  }

  borrar(id: any){
    this.ciudadService.delete(id).subscribe(
      data =>{
        this.toastr.success('Ciudad eliminada', 'OK', {
          timeOut: 2000 
    });
    this.cargarCiudades();
  },
  err => {
    this.toastr.error(err.error.mensaje, 'Fail', {
      timeOut: 2000
    });    
  }
  );
  }
}
