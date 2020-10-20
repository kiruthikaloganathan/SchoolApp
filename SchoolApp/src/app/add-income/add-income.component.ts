import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  Head: Array<{ AcHeadId: number, AcHeadName: string }> = [];
  IncomeList: Array<{ Name: string, PaymentMethod: String, Date: Date, Head: string, Amount: number, CreatedAt: Date, CreatedBy: string }> = [];
  objincome: {};

  constructor(private router: Router, private addincomeservice: DataserviceService) { }

  ngOnInit() {
    this.Head = [{ AcHeadId: 1, AcHeadName: "DONATION" }, { AcHeadId: 2, AcHeadName: "PRODUCT SALES" }];
    this.IncomeList = [{ Name: "Office Rent", PaymentMethod: "Cash", Date: new Date(), Head: "Donation", Amount: 5000, CreatedAt: new Date, CreatedBy: " " },
    { Name: "Office Rent", PaymentMethod: "Cash", Date: new Date(), Head: "Donation", Amount: 60.54, CreatedAt: new Date, CreatedBy: " " },
    { Name: "Office Rent", PaymentMethod: "Cash", Date: new Date(), Head: "Donation", Amount: 7000, CreatedAt: new Date, CreatedBy: " " },
    { Name: "Office Rent", PaymentMethod: "Cash", Date: new Date(), Head: "Donation", Amount: 4000, CreatedAt: new Date, CreatedBy: " " }];
  }
  Addincome = new FormGroup({
    name: new FormControl(),
    achead: new FormControl(),
    amount: new FormControl(),
    file: new FormControl(),
    description: new FormControl(),
  });
  myFunction(name, head, amount, file, description) {
    let Name = this.Addincome.get('name').value;
    let Head = this.Addincome.get('head').value;
    let Amount = this.Addincome.get('amount').value;
    let File = this.Addincome.get('file').value;
    let Description = this.Addincome.get('description').value;
    this.objincome = { IncomeName: Name, IncomeHead: Head, IncomeAmount: Amount, IncomeFile: File, IncomeDescription: Description };
    this.addincomeservice.AddIncome(this.objincome).subscribe(
      res => {
        if (res > 0) {
          alert('success');
        }
        else {
          alert('error');
        }
        console.log(res);
      },
      error => {
        alert('error');
      })

    if (this.validation(name, head, amount, file, description)) {
      this.IncomeList.push({ Name: name.value, PaymentMethod: "Not Applicable", Date: new Date(), Head: "not applicable", Amount: amount.value, CreatedAt: new Date, CreatedBy: "not applicable" })
    }
    // if(this.validation(name,head,amount,file,desc)){
    //   this.router.navigate(['profit']);
    // }

  }
  validation(name, head, amount, file, description) {
    if (name == undefined || name == "") {
      alert('please enter name')
      return false;
    }
    else if (head == undefined || head == "") {
      alert('please enter head')
      return false;
    }
    else if (amount == undefined || amount == "") {
      alert('please enter amount')
      return false;
    }
    else if (description == undefined || description == "") {
      alert('please enter description')
      return false;
    }
    else {
      return true;
    }
  }

}
