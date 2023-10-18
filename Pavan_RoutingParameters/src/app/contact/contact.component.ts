import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name!: string | null;
  constructor(private activatedroute:ActivatedRoute){

  }

 ngOnInit():void{
   this.name=this.activatedroute.snapshot.paramMap.get('name');

 }

}
