import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  id!: string | null;

   constructor(private activatedroute:ActivatedRoute){

   }

  ngOnInit():void{
    this.id=this.activatedroute.snapshot.paramMap.get('id');
  
  }
  

}



