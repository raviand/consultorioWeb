import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() { }


  img:string [] = ['IMG_6600', 'IMG_6586', 'IMG_6607'];

  ngOnInit() {
  }

}
