import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
myimage:string="assets/image/rajali1.png";
title:string="Rajali Cinemas";
sideimage:string="assets/image/sign-in.png";
   event: any;


  constructor() { }

  ngOnInit(): void {
  }
  // print(event:any){
 
  //   console.log(event);
  //   let name= this.event.value;
  // }



}

