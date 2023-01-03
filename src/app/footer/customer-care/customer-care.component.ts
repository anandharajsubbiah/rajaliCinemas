import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.css']
})
export class CustomerCareComponent implements OnInit {
  myimage:string="assets/image/rajali1.png";
  constructor() { }

  ngOnInit(): void {
  }

}
