import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {DataserviceService} from '../dataservice.service';


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  AccountList:Array<{AccountName:string,OpeningBalance:number,Note:string,CreatedAt:Date,CreatedBy:string}>=[];
  dob:Date;
  objbank:{};
  

  constructor(private router: Router, private bankaccountservice:DataserviceService) { }

  ngOnInit() {
    this.AccountList=[{AccountName:"HDFC",OpeningBalance:1000,Note:"",CreatedAt:new Date,CreatedBy:"not applicable"},{AccountName:"Jade Kessler",OpeningBalance:2000,Note:"Alich has oedered",CreatedAt:new Date,CreatedBy:"not applicable"},
    {AccountName:"Mae Von",OpeningBalance:3000,Note:"Alice severely. How old are you?",CreatedAt:new Date,CreatedBy:"not applicable"},{AccountName:"Mrs.Alice",OpeningBalance:4000,Note:"hello! how are you",CreatedAt:new Date,CreatedBy:"not applicable"}]
    this.dob=new Date();


  }
  BankAccount=new FormGroup({
    accountname:new FormControl(),
    openingbalance:new FormControl(),
    note:new FormControl(),
  })
  myBankaccount(){
    let Accountname=this.BankAccount.get('accountname').value;
    let Openingbalance=this.BankAccount.get('openingbalance').value;
    let Note=this.BankAccount.get('note').value;
    this.objbank={AccName:Accountname,OpenBal:Openingbalance,Note:Note};
    this.bankaccountservice.bankaccount(this.objbank).subscribe(
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
   
    if(this.validation1(Accountname,Openingbalance,Note)){
      this.AccountList.push({AccountName:Accountname,OpeningBalance:Openingbalance,Note:Note,CreatedAt:new Date,CreatedBy:"not applicable"});
      }
  }
  validation1(Accountname,Openingbalance,Note){
    if(Accountname==undefined || Accountname.value==""){
      alert('please enter accountname');
      return false;
    }
    else if(Openingbalance==undefined || Openingbalance==""){
      alert('please enter the balance');
      return false;
    }
    else if(Note==undefined || Note==""){
      alert('please enter the note')
      return false;
    }
    else{
      return true;
    }
  }

}
