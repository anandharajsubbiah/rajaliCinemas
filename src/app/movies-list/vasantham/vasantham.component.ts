import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-vasantham',
  templateUrl: './vasantham.component.html',
  styleUrls: ['./vasantham.component.css'],
  providers:[DataService]
})
export class VasanthamComponent implements OnInit {
[x: string]: any;
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";
  
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

   
}
