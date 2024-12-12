import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//import {Lavoratore, LavoratoreSignUp, LavoratoreSignUpGoogle} from "../model/Lavoratore";
import {Router} from "@angular/router";
import { Concert } from '../model/Concert';


declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class BackEndService{
  private url = "http://localhost:8080";
  constructor(private http: HttpClient , private router: Router) { }

  public token?:string | null;

  isAuthenticated(){
    //return this.getToken() != undefined;
  }

  //Funziona
  public loginAdmin(utente : UtenteCredenziali){
    this.http.post<LoginLavoratoreDto>(this.url + "/retriveData/loginLavoratore",utente)
      .subscribe(response => {
        response.lavoratore.password = ""; // Rimuovi la password. è un modo bruttissimo, ma fa quello che deve
        localStorage.setItem("utente", JSON.stringify(response.lavoratore));
        localStorage.setItem("scelta", "Admin")
        console.log(localStorage.getItem("utente"))


        this.router.navigate(["/Profilo"]);
      },(error) =>{
        console.log("(password od username non valide)" + error) //TODO
      });

  }

  //Funziona
  public loginCliente(utente : UtenteCredenziali){
    this.http.post<LoginClienteDto>(this.url + "/retriveData/loginCliente",utente)
      .subscribe(response => {
        response.cliente.password = ""; // Rimuovi la password. è un modo bruttissimo, ma fa quello che deve
        localStorage.setItem("utente", JSON.stringify(response.cliente));
        localStorage.setItem("scelta", "cliente")

        console.log(localStorage.getItem("utente"))

        this.router.navigate(["/Profilo"]);
      },(error) =>{
        console.log("(password od username non valide)" + error) //TODO
      });
  }


  public getUtente(): Observable<Admin>{

        return this.http.get<Admin>(this.url + "/lavoratore/getLavoratoreByUsername?token=" + this.getToken());

  }

  //Funziona
  public insertConcert(concert: Concert, image: File){

    const annuncioBlob = new Blob([JSON.stringify(concert)], {type: 'application/json'});
    const formData = new FormData();
    formData.append('annuncio', annuncioBlob);
    if (image != null) {
      formData.append('img', image);
    }
    formData.append('token', this.getToken()!);

    console.log(concert)
    return this.http.post<Boolean>(
      this.url + "/annuncio/insertNewAnnuncio",
      formData
    );
  }

  //Funziona
  public getAllConcert(): Observable<Concert[]>{
    return this.http.get<Concert[]>(
      this.url+"/concert/getConcert");
  }

}
