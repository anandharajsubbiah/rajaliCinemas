import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  myimage:string="assets/image/rajali1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
