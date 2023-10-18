import { Component } from '@angular/core';
import { ServicenewService } from '../servicenew.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  value!: Number;
  servicevalue(){
  this.value=new ServicenewService().value1;
  window.alert(this.value);

  }
  setvalue(var1:number):void {
  new ServicenewService().value2=var1;
 window.alert(var1);
 }
  

}
