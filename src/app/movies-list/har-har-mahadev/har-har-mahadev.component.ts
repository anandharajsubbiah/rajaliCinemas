import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-har-har-mahadev',
  templateUrl: './har-har-mahadev.component.html',
  styleUrls: ['./har-har-mahadev.component.css'],
  providers:[DataService]
})
export class HarHarMahadevComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }
 
}
