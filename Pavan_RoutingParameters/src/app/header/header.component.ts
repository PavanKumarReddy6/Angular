import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private activatedroute:ActivatedRoute,private route:Router){

  }
  Onselectabout(){
    this.route.navigate(['/about',"pavan"])
  }
  Onselectcontact(){
    this.route.navigate(['/contact',"pavan kumar"])
  }
ngOnInit(){
  this.route.navigateByUrl('/default')

}

}
