import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CounterComponent } from './counter/counter.component';
import { IfelsecompoComponent } from './ifelsecompo/ifelsecompo.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet,LoginComponent,SignupComponent,CounterComponent,IfelsecompoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result: number = 0;
  title = 'demoapp';
  name ='snehal';

  hello(){
    var x=19;
    var y=15;
    this.result = x+y;
    console.log(this.result);
  }

  functioncall(){
    alert("function called");
    this.otherfunctioncall();
  }
  otherfunctioncall(){
    let c=prompt("what is your name:");
    
    alert("hello"+c)
  }
}
