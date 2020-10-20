import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  academic: Array<{Academicid:number,AcademicName:string}>=[];
  selectclass:Array<{Selectid:number, Selectname:string}>=[];
  section:Array<{Sectionid:number,Sectionname:string}>=[];

  constructor() { }
  myFunction(aca,Class,sec,name,rollnum){
    console.log(aca.value);
    console.log(Class.value);
    console.log(sec.value);
    console.log(name.value);
    console.log(rollnum.value);
  }

  ngOnInit() {
    this.academic=[{Academicid:1,AcademicName:'2020[JAN-JUN]'},{Academicid:2,AcademicName:'2020[JUL-DEC]'}];
    this.selectclass=[{Selectid:1,Selectname:'YEAR 1'},{Selectid:2,Selectname:'YEAR 2'},{Selectid:3,Selectname:'YEAR 3'}];
    this.section=[{Sectionid:1,Sectionname:'A'},{Sectionid:2,Sectionname:'B'},{Sectionid:3,Sectionname:'C'},{Sectionid:4,Sectionname:'D'}];
  }

}
