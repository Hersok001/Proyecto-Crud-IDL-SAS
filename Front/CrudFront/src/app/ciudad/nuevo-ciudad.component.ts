import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { CiudadService } from '../service/ciudad.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-ciudad',
  templateUrl: './nuevo-ciudad.component.html',
  styleUrls: ['./nuevo-ciudad.component.css']
})
export class NuevoCiudadComponent implements OnInit {

  nombre='';
  departamento='';
  
  constructor(
    private ciudadService: CiudadService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Oncreate(): void{
    const ciudad = new Ciudad(this.nombre,this.departamento);
    this.ciudadService.save(ciudad).subscribe(
      data => {
        this.toastr.success('Ciudad creada', 'OK', {
          timeOut: 2000
      });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2000
        });
        this.router.navigate(['/']);
      }
    );
  }
}
