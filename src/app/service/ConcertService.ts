import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//import {Lavoratore, LavoratoreSignUp, LavoratoreSignUpGoogle} from "../model/Lavoratore";


@Injectable({
    providedIn: 'root'
  })
export class ConcertService{
    private url : string = "http://localhost:8080";
}