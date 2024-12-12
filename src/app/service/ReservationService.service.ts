import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Concert } from '../model/Concert';

type Concerts = {
    id: number,
    name: string,
    date: Date,
    maxSeat : number,
    price: number,
    artist: string,
    description: string

}

type Reservations = {
    id: number,
    user: User,
    concert: Concert,
    date: Date,
    nTickets: number,
    totalPrice: number
}

@Injectable({
    providedIn: 'root'
  })

export default class ReservationService implements OnInit{
    
    
    concerts: Concert[]
    private authenticated: boolean = false;


    ngOnInit(): void {
        
    }

    setConcerts(concerts: Concert[]){
        this.concerts = concerts;
    }
    getConcerts(){
        return this.concerts;
    }
    
}