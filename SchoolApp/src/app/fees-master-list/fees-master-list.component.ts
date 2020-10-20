import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-fees-master-list',
  templateUrl: './fees-master-list.component.html',
  styleUrls: ['./fees-master-list.component.css']
})
export class FeesMasterListComponent implements OnInit {
  feestype:Array<{feesid:number,feesname:string}>=[];
  student:Array<{group:string,type:string,amount:number,paymentdate:Date,CreatedAt:Date,CreatedBy:string}>=[]
  response:any;
  objfeesmaster:{};
  constructor(private router:Router,private Feesmasterservice:DataserviceService) { }
  myFunction(ftype,date,amount){
    
    console.log(ftype.value);
    console.log(date.value);
    console.log(amount.value);
    this.Feesmasterservice.kavitha=amount.value;
    this.objfeesmaster={Ftype:ftype,Date:date,Amount:amount};
    this.Feesmasterservice.FeesMaster(this.objfeesmaster).subscribe(
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
    if(this.validation(ftype,date,amount)){
    this.router.navigate(['collectfees'])
    }
  }
  reverseFunction(ftype,date,amount){
    if(this.validation(ftype,date,amount)){
    this.router.navigate(['addfeesdiscount']);
    }
    
  }
  validation(ftype,date,amount){
    if(amount.value==undefined || amount.value==""){
      alert('please enter your amount')
      return false;
    }
    else{
      return true;
    }
  }

  ngOnInit() {
    this.response=this.Feesmasterservice.kavitha;
    alert(this.response);
    this.feestype=[{feesid:1,feesname:'TERM'},{feesid:2,feesname:'Full Fees'}];
    this.student=[{group:"Tution Fees",type:"Monthly Fee",amount:1000,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable"},{group:"",type:"Lab Fee",amount:2000,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable"},
  {group:"",type:"IT Support Fee",amount:3000,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable"},{group:"",type:"School Shahrie",amount:4000,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable"}]
  }
  

}
