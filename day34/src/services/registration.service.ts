import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { Register, Response } from "src/app/models";

const URL = "https://day34.herokuapp.com/api/registration"

@Injectable()
export class RegistrationService {

    constructor(private http: HttpClient) {}

    newRegistration(regDetails: Register): Promise<Response> {
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept','application/json')

        return firstValueFrom (
            this.http.post<Response>(URL,regDetails, {headers})
            //not going to have map
            //.pipe()
        )
    }
}