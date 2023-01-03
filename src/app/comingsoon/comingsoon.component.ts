import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {
  title = 'rajali-cinemas';
  myimage:string="assets/image/rajali1.png";
  icon:string="assets/image/eagle.ico.png";
  sardar:string="assets/image/sardar3.jpg";
  prince:string="assets/image/prince.jpg";
  kalam:string="assets/image/kalam.jpg";
  blackadam:string="assets/image/blackadam.jpg";
  hindi:string="assets/image/hindi.jpg";
  brahman:string="assets/image/brahmastras.jpg";
  black:string="assets/image/blackadams.jpg";
  harries:string='assets/image/comingsoon/harries.jpg';
  drishyam:string='assets/image/comingsoon/drishyam.jpg';
  jamuna:string='assets/image/comingsoon/jamnuna.jpg';
  like:string="assets/image/comingsoon/like.jpg";
  vanam:string="assets/image/comingsoon/vanam.jpg";
  wakanda:string='assets/image/comingsoon/wakanda.jpg';
  crocodile:string="assets/image/comingsoon/crocodile.jpg";
  vaathi:string="assets/image/comingsoon/vaathi.jpg";
  kanden:string="assets/image/comingsoon/kanden unnai thanthen.jpg";
  malyalammovie:string="assets/image/comingsoon/1744.jpg";
  saarathi:string="assets/image/comingsoon/saarathi.jpg";
  jetty:string="assets/image/comingsoon/jetty.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
