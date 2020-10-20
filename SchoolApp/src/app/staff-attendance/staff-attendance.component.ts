import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrls: ['./staff-attendance.component.css']
})
export class StaffAttendanceComponent implements OnInit {
  ROLE:Array<{RoleId:number,RoleName:string}>=[];
  objstaffattendance={}

  constructor(private staffattendanceService:DataserviceService) { }
  StaffAttendance=new FormGroup({
    role:new FormControl(),
    month:new FormControl(),
    year:new FormControl()
  })

  ngOnInit() {
    this.ROLE=[{RoleId:1,RoleName:"TEACHER"},{RoleId:2,RoleName:"ADMIN"},{RoleId:3,RoleName:"Accountant"},{RoleId:4,RoleName:"Receptionist"},
  {RoleId:5,RoleName:"LIBRARIAN"},{RoleId:6,RoleName:"DRIVER"}]
  }
   myFunction(){
   let Role=this.StaffAttendance.get('role').value;
   let Month=this.StaffAttendance.get('month').value;
   let Year=this.StaffAttendance.get('year').value;
   if(this.validation(Role,Month,Year)){
    this.objstaffattendance={ROLE:Role,MONTH:Month,YEAR:Year};
    this.staffattendanceService.StaffAttendance(this.objstaffattendance).subscribe(
      res=>{
        if(res>0){
          alert('success')
        }
        else{
          alert('not success')
        }
        console.log(res)
      },
      res=>{
        alert()
      }
    )
   }
   }
   validation(Role,Month,Year){
     if(Role==undefined || Role==""){
       alert('please enter the role')
       return false;
     }
     else if(Month==undefined || Month==""){
       alert('please enter the month')
       return false;
     }
     else if(Year==undefined || Year ==""){
       alert('please enter the year')
       return false;
     }
     else{
       return true;
     }
   }
}
