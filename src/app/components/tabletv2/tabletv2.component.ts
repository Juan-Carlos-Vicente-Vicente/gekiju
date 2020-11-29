import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SogetiService } from 'src/app/services/sogeti.service';

@Component({
  selector: 'app-tabletv2',
  templateUrl: './tabletv2.component.html',
  styleUrls: ['./tabletv2.component.css']
})
export class Tabletv2Component implements OnInit {

  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajapass") cajapass: ElementRef;

  public nom: String;
  public pass: String;
  public loging: String;
  public datos: String;
  public usuarios: Array<any>;
  public errorNombre: String;
  constructor(private _service: SogetiService) {
    this.loging = "false";
  }

  mostrarLogin() {
    this.nom = this.cajanombre.nativeElement.value;
    this.pass = this.cajapass.nativeElement.value;

    if (this.cajanombre.nativeElement.value == "" && this.loging == "false") {
      //Se comprueba si el nombre esta vacio o si no se ha logeado
      this.usuarios = [];
      this.errorNombre = "Nombre vacio";
    } else {
      //Se comprueba si el nombre es correcto
      if (this.nom == "S2VTournament" && this.pass == "sogetispain") {
        this.loging = "true";
        this.mostrarEmpleados();
        this.errorNombre = "";

      } else {
        this.errorNombre = "User/Password Incorrecta";

      }
    }
  }

  busquedaEmpleados() {

  }

  mostrarEmpleados() {
    this._service.verUsuariosSogeti().subscribe(response => {
      this.usuarios = response;
    })
  }

  ngOnInit(): void {
  }

}
