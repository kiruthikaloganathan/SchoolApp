import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {
  Leave: Array<{ TypeName: string, TotalNumber: number, CreatedAt: Date, CreatedBy: string }> = [];
  objleave = {};
  objsearchLeave = {};

  constructor(private leaveservice: DataserviceService) { }
  LeaveType = new FormGroup({
    name: new FormControl(),
    days: new FormControl(),
  })

  ngOnInit() {
    this.Leave = [{ TypeName: "", TotalNumber: 739, CreatedAt: new Date, CreatedBy: "" }, { TypeName: "", TotalNumber: 322, CreatedAt: new Date, CreatedBy: "" }]
  }

  SaveLeave() {
    let Name = this.LeaveType.get('name').value;
    let Days = this.LeaveType.get('days').value;
    this.objleave = { NAME: Name, DAYS: Days };
    if (this.validation(Name, Days)) {
      this.leaveservice.LeaveSave(this.objleave).subscribe(
        res => {
          if (res > 0) {
            alert('success');
          }
          else {
            alert('not success');
          }
          console.log(res);
        },
        error => {
          alert('error');
        }

      );
    }
  }
  SearchLeave() {
    let Name1 = this.LeaveType.get('name').value;
    let Days1 = this.LeaveType.get('days').value;
    this.objsearchLeave = { name1: Name1, days1: Days1 };
    this.leaveservice.LeaveSearch(this.objsearchLeave).subscribe(
      res => {
        this.Leave = res as any;
      },
      error => {
        alert('error');
      }
    )

  }
  validation(Name, Days) {
    if (Name == "" || Name == undefined) {
      alert('please enter the Name');
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
