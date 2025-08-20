/**
 *  home.component.ts
 *    - 'Home' component definition
 *  
 ******************************************************************************/

/* Importing modules */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/* Importing custom providers */
import { HomeService } from './home.service';

/* Creating the component */
@Component({
  selector: 'mean-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Class Variables */
  homeText: string = 'Hello Home';
  whatsAppMessage: string = 'Olá! Vim através do site e gostaria de mais informações!';
  whatsAppPhone: string = '5511950900055';
  whatsAppLink!: string;

  constructor(
    public router: Router,
    public homeService: HomeService
  ) {}

  /* Fires when everything is loaded and ready */
  ngOnInit() {
    console.log("this.homeText", this.homeText);
    this.whatsAppLink = `https://api.whatsapp.com/send?phone=${this.whatsAppPhone}&text=${encodeURIComponent(this.whatsAppMessage)}`;
  }

}
