import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-leave-define',
  templateUrl: './leave-define.component.html',
  styleUrls: ['./leave-define.component.css']
})
export class LeaveDefineComponent implements OnInit {
  LeaveRole: Array<{ RoleId: number, RoleName: string }> = [];
  LeaveType: Array<{ TypeId: number, TypeName: string }> = [];
  LeaveDefineList: Array<{ Role: string, LeaveType: string, CreatedAt: Date, CreatedBy: string }>=[];
  objleavedefinesave={};
  objleavedefinesearch={}

  constructor(private leavedefineservice: DataserviceService) { }
  LeaveDefine = new FormGroup({
    role: new FormControl(),
    leavetype: new FormControl(),
    days: new FormControl()
  })

  ngOnInit() {
    this.LeaveRole = [{ RoleId: 1, RoleName: "STUDENT" }, { RoleId: 2, RoleName: "TEACHER" }, { RoleId: 3, RoleName: "ADMIN" }, { RoleId: 4, RoleName: "ACCOUNTANT" },
    { RoleId: 5, RoleName: "LIBRARIAN" }, { RoleId: 6, RoleName: "RECEPTIONIST" }, { RoleId: 7, RoleName: "DRIVER" }, { RoleId: 8, RoleName: "HOD" }];
    this.LeaveType = [{ TypeId: 1, TypeName: "CASUAL LEAVE" }, { TypeId: 2, TypeName: "SICK LEAVE" }, { TypeId: 3, TypeName: "ANNUAL/VACATION LEAVE" },
    { TypeId: 4, TypeName: "EARNED LEAVE" }, { TypeId: 5, TypeName: "PUBLIC HOLIDAYS" }, { TypeId: 6, TypeName: "MATERNITY/PATERNITY" }, { TypeId: 7, TypeName: "ADMINISTRATIVE" },
    { TypeId: 8, TypeName: "QUO EST CULPA IMPED" }];
    this.LeaveDefineList = [{ Role: "TACHER", LeaveType: "CASUAL LEAVE", CreatedAt: new Date, CreatedBy: "" },
    { Role: "ADMIN", LeaveType: "SICK LEAVE", CreatedAt: new Date, CreatedBy: "" }, { Role: "ACCOUNTANT", LeaveType: "ANNUAL LEAVE/VACATION LEAVE", CreatedAt: new Date, CreatedBy: "" },
    { Role: "LIBRARIAN", LeaveType: "PUBLIC HOLIDAYS", CreatedAt: new Date, CreatedBy: "" }]
  }
  Saveleavedefine() {
    let Role = this.LeaveDefine.get('role').value;
    let Leavetype = this.LeaveDefine.get('leavetype').value;
    let Days = this.LeaveDefine.get('days').value;
    if(this.validation(Role,Leavetype,Days)){
      this.objleavedefinesave={ROLE:Role,LEAVETYPE:this.LeaveType,DAYS:Days};
      this.leavedefineservice.PostLeaveDefine(this.objleavedefinesave).subscribe(
        res=>{
          if(res>0){
            alert('success')
          }
          else{
            alert('not success')
          }
          console.log(res)
        },
        error=>{
          alert('error')
        }
      )

    }
  }

  searchleave(){
    let Role1=this.LeaveDefine.get('role').value;
    let Leavetype1=this.LeaveDefine.get('leavetype').value;
    let Days1=this.LeaveDefine.get('days').value;
    this.objleavedefinesearch={ROLE1:Role1,LEAVETYPE:Leavetype1,DAYS:Days1};
    this.leavedefineservice.getLeaveDefine(this.objleavedefinesearch).subscribe(
      res=>{
        this.LeaveDefineList=res as any;
      },
      error=>{
        alert('error');
      }
    )
  }
  validation(Role, Leavetype, Days) {
    if (Role == "" || Role == undefined) {
      alert('enter the role');
      return false;
    }
    else if (Leavetype == "" || Leavetype == undefined) {
      alert('enter the leavetype ');
      return false;
    }
    else if (Days == "" || Days == undefined) {
      alert('please enter the days');
      return false;
    }
    else {
      return true;
    }
  }

}
