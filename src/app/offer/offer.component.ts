import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  myimage:string="assets/image/rajali1.png";
  flag:any="assets/image/flag.jpg";
  rupee:number=75;
  modi:any="assets/image/modi.png";
  constructor() { }

  ngOnInit(): void {
  }

}
