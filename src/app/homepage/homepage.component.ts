import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {
  title = 'rajali-cinemas';
  myimage:string="assets/image/rajali1.png";
  icon:string="assets/image/eagle.ico.png";
  sardar:string="assets/image/sardar3.jpg";
  prince:string="assets/image/prince.jpg";
  kalam:string="assets/image/kalam.jpg";
  blackadam:string="assets/image/blackadam.jpg";
  hindi:string="assets/image/hindi.jpg";
  brahman:string="assets/image/brahmastras.jpg";
  black:string="assets/image/blackadams.jpg";
  sardar1:string="assets/image/sardars.jpg";
  prince1:string="assets/image/princes.jpg";
  ramsetu:string="assets/image/ramsetus.jpg";
  doctor:string="assets/image/doctos.jpg";
  doctorg:string="assets/image/doctos.jpg";
  mahadeva:string="assets/image/mahadavs.jpg";
  ps:string="assets/image/pss.jpg";
  nane:string="assets/image/nanes.jpg";
  kanthara:string="assets/image/kantharas.jpg";
  telugu:string="assets/image/telugus.jpg";
  thanks:string="assets/image/thanksgods.jpg";
  gude:string="assets/image/gudis.jpg";
  invitations:string="assets/image/invitations.jpg";
  kalamsu:string="assets/image/kalams.jpg";


  options: string[]=['sardar','kantara','blackadam','nanevaruvean','ponniyin selvan','prince','doctorg','brahmastra','harhara mahadeva','the invitation','kalangalil aval vsantham'];
  constructor() { }

  ngOnInit(): void {
  }


  
  
}
