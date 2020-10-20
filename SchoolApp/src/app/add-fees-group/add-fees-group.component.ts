import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-add-fees-group',
  templateUrl: './add-fees-group.component.html',
  styleUrls: ['./add-fees-group.component.css']
})
export class AddFeesGroupComponent implements OnInit {
  student: Array<{ studentname: string, studentdescription: string,CreatedAt:Date,CreatedBy:string }> = [];
  objfeesgroup: {};

  constructor(private kavit: Router, private FeesService: DataserviceService) { }

  ngOnInit() {

    this.student = [{ studentname: 'Dheeran', studentdescription: 'Good',CreatedAt:new Date,CreatedBy:"not applicable" }, { studentname: 'John', studentdescription: 'Average',CreatedAt:new Date,CreatedBy:"not applicable" },
    { studentname: 'Archie', studentdescription: 'Bad',CreatedAt:new Date,CreatedBy:"not applicable" }, { studentname: 'Kate', studentdescription: 'Very Good',CreatedAt:new Date,CreatedBy:"not applicable" }];
  }
  AddFeesGroup = new FormGroup({
    firstname: new FormControl(),
    description: new FormControl(),
    btn: new FormControl()
  });
  myFunction() {

    let namee = this.AddFeesGroup.get('firstname').value;
    let descrip = this.AddFeesGroup.get('description').value;
    this.FeesService.kavitha = namee;
    this.kavit.navigate(['addfeesdiscount']);
    this.objfeesgroup = { Name: namee, Description: descrip }
    this.FeesService.FeesGroup(this.objfeesgroup).subscribe(
      res => {
        if (res > 0) {
          alert('success');
        }
        else {
          alert('not success');
        }
        console.log(res);
      },
      res => {
        alert('error');
      }
    )


  }

}
