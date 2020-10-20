import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.css']
})
export class BankPaymentComponent implements OnInit {
  feestype: Array<{ feesid: number, Fees: string}> = [];
  feesarray: Array<{ studentname: string,registereddate:Date , feestype: string, date: number, amount: number, note: string, slip: string, status: string }> = [];
  HeaderContent:string;
  age:number;
  dob:Date;
  response:any;

  constructor(private router: Router,private service: DataserviceService) { }

  ngOnInit() {
    this.response=this.service.kavitha;
    alert(this.response);
    this.feestype = [{ feesid: 1, Fees: "Fixed" }, { feesid: 2, Fees: "Contact" }];
    this.feesarray = [{ studentname: "John",registereddate:new Date(), feestype: "Monthly Fee", date: 12, amount: 2000, note: "", slip: "view", status: "Approved" },
    { studentname: "Arthi",registereddate:new Date(), feestype: "Term Fee", date: 13, amount: 3000, note: "", slip: "view", status: "Approved" },
    { studentname: "Marni",registereddate:new Date(), feestype: "Full Fee", date: 14, amount: 5000, note: "", slip: "view", status: "Approved" }];
    this.HeaderContent="fees details"
    this.dob=new Date();
  }
  myFunction(sname, ftype, date, amount, slip, status, actions) {
    console.log(sname.value);
    console.log(ftype.value);
    console.log(date.value);
    console.log(amount.value);
    console.log(slip.value);
    console.log(status.value);
    console.log(actions.value);
    
}
  reverseFunction(sname, ftype, date, amount, slip, status, actions) {

    // if(sname.value==undefined || sname.value==""){
    //   alert('please enter surname')
    //   return false;
    // }
    if (this.validation(sname, ftype, date, amount, slip, status, actions)) 
    {
      this.router.navigate(['feesdue'])
      
    }

  }
  validation(sname, ftype, date, amount, slip, status, actions) {
    if (sname.value == undefined || sname.value == "") {
      alert('please enter surname')
      return false;
    }
    else{
      return true;
    }

  }
}
