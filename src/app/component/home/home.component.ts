import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import ReservationService from '../../service/ReservationService.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  isHome:boolean = false;
  constructor(private service: ReservationService ){}

  ngOnInit(): void {
  }

}
