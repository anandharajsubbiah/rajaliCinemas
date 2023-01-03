import { Component } from '@angular/core';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rajali-cinemas';
  // myimage:string="assets/image/rajali1.png";
  // icon:string="assets/image/eagle.ico.png";
  // sardar:string="assets/image/sardar3.jpg";
  // prince:string="assets/image/prince.jpg";
  // kalam:string="assets/image/kalam.jpg";
  // blackadam:string="assets/image/blackadam.jpg";
  // hindi:string="assets/image/hindi.jpg";
  // brahman:string="assets/image/brahmastras.jpg";
  // black:string="assets/image/blackadams.jpg";
  // sardar1:string="assets/image/sardars.jpg";
  // prince1:string="assets/image/princes.jpg";
  // ramsetu:string="assets/image/ramsetus.jpg";
  // doctor:string="assets/image/doctos.jpg";
  // doctorg:string="assets/image/doctos.jpg";
  // mahadeva:string="assets/image/mahadavs.jpg";
  // ps:string="assets/image/pss.jpg";
  // nane:string="assets/image/nanes.jpg";
  // kanthara:string="assets/image/kantharas.jpg";
  // telugu:string="assets/image/telugus.jpg";
  // thanks:string="assets/image/thanksgods.jpg";
  // gude:string="assets/image/gudis.jpg";
  // invitations:string="assets/image/invitations.jpg";
  // kalamsu:string="assets/image/kalams.jpg";


constructor(private dataservice:DataService){
 
}
  ngOnInit():void{}
  
}