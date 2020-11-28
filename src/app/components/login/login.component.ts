import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/users';
import { SogetiService } from 'src/app/services/sogeti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: User;

  @ViewChild("cajanombre") cajanombre: ElementRef;

  @ViewChild("cajapass") cajapass: ElementRef;

  constructor(private _service: SogetiService) {
    this.usuario = new User("sogetispain", "S2VTournament");
  }

  hacerlogin() {
    var user = this.cajanombre.nativeElement.value;
    var pass = this.cajapass.nativeElement.value;

  }

  ngOnInit(): void {
    this.usuario.password = "sogetispain";
    this.usuario.user = "S2VTournament";
    console.log("Este es el usuario\n" + this.usuario.password);
    this._service.getLogin(this.usuario).subscribe(response => {
      //console.log("Este es el token " + response);
      console.log(response);
    })

    // this._service.getUser().subscribe(response => {
    //   console.log(response);
    // })
  }

}
