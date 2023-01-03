import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  myimage:any="assets/image/rajali1.png";
  toggle = true;
  status = 'Enable'; 
 
  public message = "Your Ticket Succeesfully Booked";

    constructor(){
     
    }
  ngOnInit(): void {
    
  }
  public myFunc() {
    alert(this.message);
  }
  
  name = 'Angular 6';
  users: Array<any> = [{
    id: 1,
    // name:'1',
    active: true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: true
  }, {
    id: 4,
    active: true
  }, {
    id: 5,
    active:  true
  }, {
    id: 6,
    active:  true
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active:  true
  }, {
    id: 10,
    active:  true
  },
  {
    id: 11,
    active:  true
  }, {
    id: 12,
    active: true
  }, {
    id: 13,
    active: true
  }, {
    id: 14,
    active:  true
  }, {
    id: 15,
    active:  true
  }, {
    id: 16,
    active:  true
  }, {
    id: 17,
    active: true
  }, {
    id: 18,
    active: true
  }, {
    id: 19,
    active:  true
  }, {
    id: 20,
    active:  true
  }]
  users1: Array<any> = [{ 
    id: 1,
    // name:'1',
    active:  true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: true
  }, {
    id: 4,
    active:  true
  }, {
    id: 5,
    active:  true
  }, {
    id: 6,
    active:  true
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active: true
  }, {
    id: 10,
    active:  true
  },
  {
    id: 11,
    active:  true
  }, {
    id: 12,
    active: true
  }, {
    id: 13,
    active: true
  }, {
    id: 14,
    active:  true
  }, {
    id: 15,
    active:  true
  }, {
    id: 16,
    active:  true
  }, {
    id: 17,
    active: true
  }, {
    id: 18,
    active: true
  }, {
    id: 19,
    active:  true
  }, {
    id: 20,
    active: true
  }]
  users2: Array<any> = [{
    id: 1,
    // name:'1',
    active:  true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: true
  }, {
    id: 4,
    active: true
  }, {
    id: 5,
    active: true
  }, {
    id: 6,
    active: true
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active: true
  }, {
    id: 10,
    active: true
  },
  {
    id: 11,
    active: true
  }, {
    id: 12,
    active: true
  }, {
    id: 13,
    active: true
  }, {
    id: 14,
    active: true
  }, {
    id: 15,
    active: true
  }, {
    id: 16,
    active: true
  }, {
    id: 17,
    active: true
  }, {
    id: 18,
    active: true
  }, {
    id: 19,
    active: false
  }, {
    id: 20,
    active: false
  }]
  users3: Array<any> = [{
    id: 1,
    // name:'1',
    active:  true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: true
  }, {
    id: 4,
    active: true
  }, {
    id: 5,
    active: true
  }, {
    id: 6,
    active: true
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active: true
  }, {
    id: 10,
    active: true
  },
  {
    id: 11,
    active: false
  }, {
    id: 12,
    active: false
  }, {
    id: 13,
    active: false
  }, {
    id: 14,
    active: true
  }, {
    id: 15,
    active: true
  }, {
    id: 16,
    active: true
  }, {
    id: 17,
    active: true
  }, {
    id: 18,
    active: true
  }, {
    id: 19,
    active: true
  }, {
    id: 20,
    active: true
  }]
  users4: Array<any> = [{
    id: 1,
    // name:'1',
    active: true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: true
  }, {
    id: 4,
    active: true
  }, {
    id: 5,
    active: true
  }, {
    id: 6,
    active: true
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active: true
  }, {
    id: 10,
    active: true
  },
  {
    id: 11,
    active: true
  }, {
    id: 12,
    active: true
  }, {
    id: 13,
    active: true
  }, {
    id: 14,
    active: true
  }, {
    id: 15,
    active: false
  }, {
    id: 16,
    active: false
  }, {
    id: 17,
    active: false
  }, {
    id: 18,
    active: false
  }, {
    id: 19,
    active: false
  }, {
    id: 20,
    active: false
  }]
  users5: Array<any> = [{
    id: 1,
    // name:'1',
    active: true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: false
  }, {
    id: 4,

    active: false
  }, {
    id: 5,
    active: false
  }, {
    id: 6,
    active:false
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active: true
  }, {
    id: 10,
    active: true
  },
  {
    id: 11,
    active: true
  }, {
    id: 12,
    active: true
  }, {
    id: 13,
    active: true
  }, {
    id: 14,
    active:false
  }, {
    id: 15,
    active: false
  }, {
    id: 16,
    active: false
  }, {
    id: 17,
    active: true
  }, {
    id: 18,
    active: true
  }, {
    id: 19,
    active:  true
  }, {
    id: 20,
    active:  true
  }]
  users6: Array<any> = [{
    id: 1,
    // name:'1',
    active: true
  }, {
    id: 2,
    active: true
  }, {
    id: 3,
    active: true
  }, {
    id: 4,
    active: true
  }, {
    id: 5,
    active: true
  }, {
    id: 6,
    active: true
  }, {
    id: 7,
    active: true
  }, {
    id: 8,
    active: true
  }, {
    id: 9,
    active: true
  }, {
    id: 10,
    active: true
  },
  {
    id: 11,
    active: true
  }, {
    id: 12,
    active: true
  }, {
    id: 13,
    active: true
  }, {
    id: 14,
    active: true
  }, {
    id: 15,
    active: true
  }, {
    id: 16,
    active: true
  }, {
    id: 17,
    active: true
  }, {
    id: 18,
    active: true
  }, {
    id: 19,
    active: false
  }, {
    id: 20,
    active: false
  }]
  click(user: any) {
    user.active = !user.active
    
  }

}
  

 

  





  

