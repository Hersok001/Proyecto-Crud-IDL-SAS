import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../service/ciudad.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';
import { Ciudad } from '../models/ciudad';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {

  ciudad: Ciudad= null;

  constructor(
    private ciudadService: CiudadService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.ciudadService.detail(id).subscribe(
      data => {
        this.ciudad = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.ciudadService.update(id, this.ciudad).subscribe(
      data => {
        this.toastr.success('Ciudad Actualizada', 'OK', {
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
