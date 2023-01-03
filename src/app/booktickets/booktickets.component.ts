import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css'],
  providers:[DataService]
})

export class BookticketsComponent implements OnInit {
myimage:any="assets/image/rajali1.png";
imdb:any="assets/image/imdb.png";
smalleagle:any="assets/image/small eagle.png";

morning:any=false;
raj:any=true;



  constructor(public dataService:DataService) { }
 

   
  
  currentTime:any=new Date(`h:mm a`);
  setTime:any=new Date(`10:30 AM`);
  changedtime:any=new Date(`12:00 AM`);

 close(){
  if(this.currentTime<= this.setTime){
   this.morning=true;
  
  }};
// close(){
//   this.currentTime<this.setTime;
//   return false;
// }


ngOnInit(): void {
   
}

  }
function elseif() {
  throw new Error('Function not implemented.');
}

