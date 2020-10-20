import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  array:Array<{name:string,studentid:number}>=[];

  constructor() { }

  ngOnInit() {

  }
  myFunction(text,studentid){
    if(this.validation(text,studentid)){
      this.array.push({name:text.value,studentid:studentid.value});
    
    }
    
    
    console.log(text.value);
    
  
  }
  validation(text,studentid){
    if(text.value==undefined || text.value==""){
      alert('please enter the name');
      return false;
    }
    else if(studentid.value==undefined || studentid.value==""){
      alert('please enter the studentid');
      return false;
      }
    else{
      return true;
    }
  }

}
