import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-ori-devuda',
  templateUrl: './ori-devuda.component.html',
  styleUrls: ['./ori-devuda.component.css'],
  providers:[DataService]
})
export class OriDevudaComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  imdb:any="assets/image/imdb.png";
  smalleagle:any="assets/image/small eagle.png";
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
