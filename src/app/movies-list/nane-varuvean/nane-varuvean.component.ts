import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-nane-varuvean',
  templateUrl: './nane-varuvean.component.html',
  styleUrls: ['./nane-varuvean.component.css'],
  providers:[DataService]
})
export class NaneVaruveanComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
