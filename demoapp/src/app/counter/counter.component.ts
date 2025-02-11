import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
   name = "";
  showname1="";
  email="";

  getname(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
  showname(){
    this.showname1=this.name;
  }
  setname(){
    this.name="snehal";
  }
  getemail(val:string){
    console.log(val);
    val=this.email;
    
  }
  setemail(){
   
    this.email="snehal@this.getemail.com";
    
  }


  count:number = 0;

  decrement(){
    this.count=this.count-1;
  }
  increment(){
    this.count=this.count+1;
  }
  reset(){
    this.count=0;
  }

  clickme(event:Event){
    console.log("event called",event);
    console.log("event called",(event.target as Element).className);

  }
  
}
