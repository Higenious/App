import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Records OF Users';
  employees = [
    {name:"chetna", position:"Programmer"},
    {name:"aaaaa"    , position:"Designer"},
    {name:"aabaab"   , position:"Manager"},
    {name:"aaaaa",position:"CEO"}
  ];
 
  model:any={};
  model2:any={};
  msg:any="";
  
  addEmployee(){
  	console.log('add button presseddddddd');
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... ";
}
  deleteEmployee(i){
  	console.log("Youy Are in Delete Console ");
  	this.employees.splice(i,1);
  	this.msg = "Record IS Succesfully Deleted....";
  }
   clickMe(){
    this.msg = "";
  }

  myValue;
  editEmployee(k){
  	 console.log('you Are in Edit  Blog');
     this.model2.name = this.employees[k].name;
     this.model2.position = this.employees[k].position;
     this.myValue = k;
  }


  updateEmployee(){
  	let k =this.myValue;
  	for(let i=0; i< this.employees.length;i++){
  		if(i==k){
  			this.employees[i]=this.model2;
  			this.model2={};
  			this.msg = "Record is updated Succesfullly!!!!!";
  		}
  	}

  }
}