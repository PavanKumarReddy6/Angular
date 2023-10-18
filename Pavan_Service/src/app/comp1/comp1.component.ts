import { Component } from '@angular/core';
import { ServicenewService } from '../servicenew.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  value!: Number;
  servicevalue(){
  this.value=new ServicenewService().value1;
  window.alert(this.value);

  }
  setvalue(var1:number):void {
  new ServicenewService().value2=var1;
 
 }
  


}
