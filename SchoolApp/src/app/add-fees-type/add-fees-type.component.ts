import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-add-fees-type',
  templateUrl: './add-fees-type.component.html',
  styleUrls: ['./add-fees-type.component.css']
})
export class AddFeesTypeComponent implements OnInit {

  fgroup: Array<{ Feesid: number, Feesname: string }> = [];
  student: Array<{ studentname: string, feesgroup: string, paymentdate:Date,CreatedAt:Date,CreatedBy:string }> = [];
  objfeestype:{};

  constructor(private router: Router, private Feestypeservice: DataserviceService) { }
  myFunction(firstname, feesgroup) {

    console.log(firstname.value);
    console.log(feesgroup.value);
    this.objfeestype={Firstname:firstname,Feesgroup:feesgroup};
    this.Feestypeservice.FeesType(this.objfeestype).subscribe(
      res=>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not success')
        }
        console.log(res)
      },
      res=>{
        alert('error');
      }
    )

      this.Feestypeservice.kavitha = firstname.value;
      if(this.validation(firstname)){
     this.router.navigate(['addfeesdiscount']);
      }
    
   }
  validation(firstname) {
     if (firstname.value == undefined || firstname.value == "") {
       alert('please enter your name');
       return false;
    }
    else{
      return true;
    }
  

    }

  ngOnInit() {
    this.fgroup = [{ Feesid: 1, Feesname: "Fixed" }, { Feesid: 2, Feesname: "Term type" }];
    this.student = [{ studentname: "IT Support Fee", feesgroup: "Tution Fees" , paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable"}, { studentname: "Lab Fee", feesgroup: "Tution Fee",paymentdate:new Date,CreatedAt:new Date,CreatedBy:"not applicable" },
    { studentname: "Monthly fee", feesgroup: "Tution Fee", paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable" }, { studentname: "School Shahire", feesgroup: "Tution Fee" ,paymentdate:new Date(),CreatedAt:new Date,CreatedBy:"not applicable"}];

  }

}



