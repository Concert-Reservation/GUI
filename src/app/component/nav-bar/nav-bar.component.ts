import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ReservationService from '../../service/ReservationService.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements AfterContentChecked{

  logoImg:string = "../../assets/Skill.png"

  constructor(private router: Router, private service: ReservationService, private backEndService: BackEndService){}


  arrowIcon= faArrowDown
  title = 'SkillMatch';
  sizeConcerti:number=0;
  isHome:boolean=false;
  isEsplora:boolean=false;


  linkHome:String="http://localhost:4200/Home"

  ngAfterViewChecked(): void {
  }


  ngAfterContentChecked(): void {

    if(this.router.url==="/Home"){
      this.isHome=true
    }

    else{
      this.isHome=false
    }
  }

  getRange(sizeConcerti: number){
    return this.sizeConcerti
  }


  switch(){
    if(this.entita==='admin')
    {
      localStorage.setItem("scelta","customer")
      this.entita='customer'
    }
    else{
        localStorage.setItem("scelta","admin")
        this.entita='customer'
    }
  }

  isAutenticato(){

    return this.backEndService.isAuthenticated()
  }
  _isEsplora(){
    return this.isEsplora
  }
  doLogout(){


    this.backEndService.removeToken()

  }


}
