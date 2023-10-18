import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicenewService {
   static mainvalue:Number=25;
 
   
   get value1() : Number{
   return ServicenewService.mainvalue;
   }
   
  set value2 (qwe:number) {
   ServicenewService.mainvalue = qwe;
   console.log(qwe);
   
   }
  
}
