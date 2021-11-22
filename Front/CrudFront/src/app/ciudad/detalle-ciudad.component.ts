import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../service/ciudad.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';
import { Ciudad } from '../models/ciudad';


@Component({
  selector: 'app-detalle-ciudad',
  templateUrl: './detalle-ciudad.component.html',
  styleUrls: ['./detalle-ciudad.component.css']
})
export class DetalleCiudadComponent implements OnInit {

 ciudad: Ciudad = null;

  constructor(
    private productoService: CiudadService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe(
      data => {
        this.ciudad = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 2000  
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
