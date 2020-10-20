import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-fees-payment',
  templateUrl: './fees-payment.component.html',
  styleUrls: ['./fees-payment.component.css']
})
export class FeesPaymentComponent implements OnInit {
  selectclass:Array<{selectid:number,selectname:string}>=[];
  selectsection:Array<{selectid:number,selectname:string}>=[];
  fpay:Array<{sname:string,admisssionno:number,rollno:number,paymentdate:Date,CreatedAt:Date,CreatedBy:string}>=[];
  response:any;
  objfeespayment:{};

  constructor(private router:Router,private Feespaymentservice:DataserviceService) { }
  myFunction(sclass,ssection){
    
    console.log(sclass.value);
    console.log(ssection.value);
    this.Feespaymentservice.kavitha=sclass.value;
    this.objfeespayment={Sclass:sclass,Ssection:ssection};
    this.Feespaymentservice.FeesPayment(this.objfeespayment).subscribe(
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
    if(this.validation(sclass)){
    this.router.navigate(['feesdue'])
    }
  }
  reverseFunction(){
    this.router.navigate(['collectfees']);
  }
  validation(sclass){
    if(sclass.value==undefined || sclass.value==""){
      alert('please enter your class');
      return false;
    }
    else{
      return true;
    }
  }

  ngOnInit() {
    this.response=this.Feespaymentservice.kavitha;
    alert(this.response);
    this.selectclass=[{selectid:1,selectname:"Year 1"},{selectid:2,selectname:"Year 2"},{selectid:3,selectname:"Year 3"}];
    this.selectsection=[{selectid:1,selectname:"A"},{selectid:2,selectname:"B"},{selectid:3,selectname:"C"}];
    this.fpay=[{sname:"John",admisssionno:123,rollno:1,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},{sname:"Maria",admisssionno:345,rollno:2,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},
  {sname:"Rosie",admisssionno:567,rollno:3,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""},{sname:"Archie",admisssionno:398,rollno:3,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:""}];
  }

}
