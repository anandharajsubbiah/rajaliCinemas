import { Injectable } from '@angular/core';




@Injectable()
export class DataService {
  today: number = Date.now();
  today1:any=new Date();
  tomorrow :any=  new Date(this.today1.setDate(this.today1.getDate() ));
   tomorrow1 :any=  new Date(this.today1.setDate(this.today1.getDate()+1 ));
   tomorrow2 :any=  new Date(this.today1.setDate(this.today1.getDate()+1 ));
   tomorrow3:any=  new Date(this.today1.setDate(this.today1.getDate()+1 ));
   tomorrow4:any=  new Date(this.today1.setDate(this.today1.getDate()+1 ));
   tomorrow5:any=  new Date(this.today1.setDate(this.today1.getDate()+1 ));

  constructor(){}


  }
