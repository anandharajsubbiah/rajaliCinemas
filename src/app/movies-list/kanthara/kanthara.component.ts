import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-kanthara',
  templateUrl: './kanthara.component.html',
  styleUrls: ['./kanthara.component.css'],
  providers:[DataService]
})
export class KantharaComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";
  constructor(public dataService:DataService) { }
  ngOnInit(): void {
  }

}
