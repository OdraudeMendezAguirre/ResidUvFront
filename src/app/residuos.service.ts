import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Residuo } from "./entities/residuo";
import { Contribucion } from "./entities/contribucion";

@Injectable({
    providedIn: 'root'
})

export class ResiduosService {
    constructor (private http: HttpClient){}

    getResiduos():Observable<Residuo>{
        return this.http.get("http://127.0.0.1:8083/residuos");
    }

    postContribucion(contri: Contribucion):Observable<Contribucion>{
        const body={
            fecha_registro: contri.fecha_registro,
            residuosID: contri.residuosID,
            alumnoID: contri.alumnoID,
            cantidad: contri.cantidad
        }
        return this.http.post("http://127.0.0.1:8083/contribucion",body);
    }
}