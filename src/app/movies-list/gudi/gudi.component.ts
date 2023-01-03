import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-gudi',
  templateUrl: './gudi.component.html',
  styleUrls: ['./gudi.component.css'],
  providers:[DataService]
})
export class GudiComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
