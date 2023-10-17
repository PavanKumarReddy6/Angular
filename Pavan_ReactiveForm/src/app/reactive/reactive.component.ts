import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{
  react!: FormGroup;
  ngOnInit(): void {
    this.react=new FormGroup({
   Firstname:new FormControl(null,Validators.required),
   lastname:new FormControl(null,Validators.required),
   email:new FormControl(null)});

  }
  Onsubmit(){
    console.log(this.react)
  }


}
