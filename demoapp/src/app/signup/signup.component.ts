import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  name:string = "snehal"
  sum(a:number,b:number){
    let c=a+b;
    console.log(c);
       
    
  }

  updateName(){
    
    //   direct name is not use beacuse is datatype is const than use by this.name

    this.name="bhavsar"
  }
}
