import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchincome',
  templateUrl: './searchincome.component.html',
  styleUrls: ['./searchincome.component.css']
})
export class SearchincomeComponent implements OnInit {
  Design:Array<{Designation:string,Action:string}>=[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.Design=[{Designation:"Accountant",Action:""},{Designation:"Admin",Action:""},{Designation:"Assistant Teacher",Action:""},
  {Designation:"Assistant Head",Action:""}];
  }
  myFunction(design,action){
    if(this.validation(design)){
      this.Design.push({Designation:design.value,Action:action});
    }
    // if(this.validation(design)){
    //   this.router.navigate(['departments'])
    // }
    console.log(design.value);
  }
  validation(design){
    if(design.value==undefined || design.value==""){
      alert('please enter')
      return false;
    }
    else{
      return true;
    }
  }

}
