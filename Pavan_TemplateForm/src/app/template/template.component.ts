import { Component } from '@angular/core';
import {NgForm} from  '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

submit(login:NgForm){
  console.log(login);
}


}
