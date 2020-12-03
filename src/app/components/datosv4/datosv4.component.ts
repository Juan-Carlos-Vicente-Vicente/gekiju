import { Component, OnInit } from '@angular/core';
import { SogetiService } from 'src/app/services/sogeti.service';

@Component({
  selector: 'app-datosv4',
  templateUrl: './datosv4.component.html',
  styleUrls: ['./datosv4.component.css']
})
export class Datosv4Component implements OnInit {

  public usuarios: Array<any>;
  public entrar: String;
  constructor(private _service: SogetiService) { }

  mostrarEmpleados() {
    this._service.verUsuariosPruebaSogeti().subscribe(response => {
      this.usuarios = response;
    })
  }

  hacerlogin() {
    this._service.loginSogeti().subscribe(response => {
      this.entrar = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.mostrarEmpleados();
    this.hacerlogin();
  }

}
