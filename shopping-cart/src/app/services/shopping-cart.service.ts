import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  items = new Subject();
  temp: any = [] ;

  getItems(){
      return this.items;
  }

  add(item:any){
      this.temp.push(item);
      this.items.next(this.temp);
  }

}
