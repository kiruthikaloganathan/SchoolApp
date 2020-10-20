import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-collect-fees',
  templateUrl: './collect-fees.component.html',
  styleUrls: ['./collect-fees.component.css']
})
export class CollectFeesComponent implements OnInit {
  student:Array<{classid:number,classname:string}>=[];
  studentsection:Array<{sectionid:number,sectionname:string}>=[];
  cfees:Array<{searchbyname:string,admissionno:number,rollno:number,nationalidno:number,localidnumber:number,paymentdate:Date,CreatedAt:Date,CreatedBy:string}>=[];
  response:any;
  objcollectfees:{};

  constructor(private router:Router,private Collectfeesservice:DataserviceService) { }
  CollectFees=new FormGroup({
   sclass:new FormControl(),
   ssection:new FormControl(),

  });

  ngOnInit() {
    this.student=[{classid:1,classname:"Year1"},{classid:2,classname:"Year2"},{classid:3,classname:"Year3"}];
    this.studentsection=[{sectionid:1,sectionname:"A"},{sectionid:2,sectionname:"B"},{sectionid:3,sectionname:"C"}];
    this.cfees=[{searchbyname:"John",admissionno:123,rollno:1,nationalidno:90,localidnumber:89,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},
  {searchbyname:"Kavin",admissionno:23,rollno:2,nationalidno:35,localidnumber:45,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},
{searchbyname:"Mary",admissionno:3,rollno:3,nationalidno:65,localidnumber:64,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""}];
this.response=this.Collectfeesservice.kavitha;
alert(this.response)

  }
  myFunction(){

    
    let selectclass=this.CollectFees.get(['sclass']).value;
    let selectsection=this.CollectFees.get(['ssection']).value;
    this.Collectfeesservice.kavitha=selectclass;
    this.objcollectfees={Selectclass:selectclass,Section:selectsection};
    this.Collectfeesservice.CollectFees(this.objcollectfees).subscribe(
      res=>{
        if(res>0){
          alert('save');
        }
        else{
          alert('error');
        }
        console.log(res)
      },
      error => {
        alert('error');
      })
    
    if(this.validation(selectclass,selectsection)){
    this.router.navigate(['feespayment'])
    }
  }
  reverseFunction(){
    this.router.navigate(['feesmasterlist'])
  }
  validation(selectclass,selectsection){
    if(selectclass==undefined || selectclass==""){
      alert('please enter your class');
      return false;
    }
    else{
      return true;
    }
  }

}
