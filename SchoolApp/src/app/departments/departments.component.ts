import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  department:Array<{Department:string,Action:string,CreatedAt:Date,CreatedBy:string}>=[];
  objdepartment={};

  constructor(private router:Router,private DepartmentService:DataserviceService) { }

  ngOnInit() {
    this.department=[{Department:"Academic",Action:"",CreatedAt:new Date,CreatedBy:"not applicable"},{Department:"Admin",Action:"",CreatedAt:new Date,CreatedBy:"not applicable"},{Department:"Arts",Action:"",CreatedAt:new Date,CreatedBy:"not applicable"},
  {Department:"Commerce",Action:"",CreatedAt:new Date,CreatedBy:"not applicable"},{Department:"Exam",Action:"",CreatedAt:new Date,CreatedBy:"not applicable"}];
  }
  Department=new FormGroup({
    text: new FormControl()
  });
  myFunction(){
    let dept= this.Department.get('text').value;
    // this.router.navigate(['staffinformation']);
    if(this.validation(dept)){
      this.department.push({Department:dept,Action:"not applicable",CreatedAt:new Date,CreatedBy:"not applicable"})
    }
    this.objdepartment={Dept:dept};
    this.DepartmentService.Depart(this.objdepartment).subscribe(
      res=>{
        if(res>0){
          alert('success');
        }
        else{
          alert('not success');
        }
        console.log(res);
      },
      res=>{
        alert('error');
      }
    )
  }
  validation(dept){
    if(dept==undefined || dept==""){
      alert('please enter the tetx')
      return false;
    }
    else{
      return true;
    }
  }

}
