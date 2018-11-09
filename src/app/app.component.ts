import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private personObject:{
    name:string
    lastname?:string
  }; 
  private personArray = ['John','Billy','Jane','Bob']; 
  
  private randomListOfNames = ['Matthew','James','Craig','Ali','Amir','Martha',
  'Stewart','Jennifer','Kumar','Jamal','Ling']; 

  constructor(){
    this.personObject={
      name:'user', 
      lastname:'test'
    }
  }
  
  changePersonProperty(){
    this.personObject.name='user2';
    this.personObject.lastname='test2' 
  }

  changePersonObject(){
    this.personObject={
      name:'user2', 
      lastname:'test2' 
    }
  }

  addToPersonArray(){
    this.personArray.push(this.randomListOfNames[Math.floor(Math.random()*this.randomListOfNames.length)]); 
  }

  changePersonArrayReference(){
    this.personArray=['Mark','Markus','Michael']; 
  }  

}
