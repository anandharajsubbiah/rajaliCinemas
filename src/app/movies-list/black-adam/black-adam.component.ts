import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-black-adam',
  templateUrl: './black-adam.component.html',
  styleUrls: ['./black-adam.component.css'],
  providers:[DataService]
})
export class BlackAdamComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }
 
 
}
