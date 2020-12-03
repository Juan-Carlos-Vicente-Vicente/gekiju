import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";
import { User } from "./../models/users";

@Injectable()
export class SogetiService {
    private url: string;
    private urlOur: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlApi;
        this.urlOur = Global.urlLocal;

    }

    getUser(): Observable<any> {
        var request = "users";
        return this._http.get(this.url + request);
    }

    getLogin(user: User): Observable<any> {
        // let userjson = JSON.stringify(user);
        var headers = new HttpHeaders();
        headers.set("password", user.password).set("user", user.user);
        console.log(headers);
        var request = "authenticate";
        return this._http.post(this.url + request, {
            headers: headers
        });
    }

    login(user: User): Observable<any> {
        var request = "authenticate";
        var header = new HttpHeaders().set("user", user.user);
        var header = new HttpHeaders().set("password", user.password);
        return this._http.post(this.url + request, {
            headers: header
        });
    }

    loginSogeti(): Observable<any> {
        var request = "authenticate"
        var header = new HttpHeaders().set("password", "sogetispain");
        var header = new HttpHeaders().set("user", "S2VTournament");

        return this._http.post(this.url + request, {
            headers: header
        });
    }

    verUsuariosSogeti(): Observable<any> {
        var request = "users";
        return this._http.get(this.urlOur + request);

    }
    verUsuariosPruebaSogeti(): Observable<any> {
        var request = "usersprueba";
        return this._http.get(this.urlOur + request);

    }


}
