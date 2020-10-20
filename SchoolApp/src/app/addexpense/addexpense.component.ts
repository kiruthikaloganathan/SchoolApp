import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  ExpenseList:Array<{Name:string,Payment:string,Date:Date,Head:string,Amount:number,CreatedAt:Date,CreatedBy:string}>=[];
  objexpense:{};

  constructor(private router:Router,private addExpenseSerivce:DataserviceService) { }

  ngOnInit() {
    this.ExpenseList=[{Name:"Naveen",Payment:"Cheque",Date:new Date(),Head:"Utility Bills",Amount:6718,CreatedAt:new Date,CreatedBy:" "},
  {Name:"Kavi",Payment:"Cash",Date:new Date(),Head:"Utility Bills",Amount:4567,CreatedAt:new Date,CreatedBy:" "}];
  }
  myFunction(name,head,payment,date,amount){
    if(this.validation(name,head,payment,date,amount)){
      this.router.navigate(['searchincome'])
    }
    console.log(name.value);
    this.objexpense={Name:name,Head:head,Payment:payment,Date:date,Amount:amount};
    this.addExpenseSerivce.Expense(this.objexpense).subscribe(
      res =>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not sucess');
        }
        console.log(res);
      },
      res=>{
        alert('error');
      }
    )
  }
  validation(name,head,payment,date,amount){
    if(name.value==undefined || name.value==""){
      alert('enter the name')
      return false;
    }
    else if(head.value==undefined || head.value==""){
      alert('enterthe head')
      return false
    }
    else if(payment.value==undefined || payment.value==""){
      alert('enter the payment')
      return false
    }
    else if(date.value==undefined || date.value==""){
      alert('enter the date')
      return false;
    }
    else if(amount.value==undefined || amount.value==""){
      alert('please enter the amount')
      return false;
    }
    else{
      return true
    }
  }

}
