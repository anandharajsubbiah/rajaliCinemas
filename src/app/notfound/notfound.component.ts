import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
cinema:any="assets/image/strob-light.png";
myimage:any="assets/image/rajali1.png";
  constructor() { }

  ngOnInit(): void {
  }

}
