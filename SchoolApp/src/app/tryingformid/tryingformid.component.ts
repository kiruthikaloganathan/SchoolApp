import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{Router} from '@angular/router';
import { AuthService} from '../authentication/services/auth.service'


@Component({
  selector: 'app-tryingformid',
  templateUrl: './tryingformid.component.html',
  styleUrls: ['./tryingformid.component.css']
})
export class TryingformidComponent implements OnInit {
  academic: Array<{Academicid:number,AcademicName:string}>=[];
  selectclass:Array<{Selectid:number, Selectname:string}>=[];
  section:Array<{Sectionid:number,Sectionname:string}>=[];
  

  constructor(private kavitha:Router) {

   }

  ngOnInit() {
    this.academic=[{Academicid:1,AcademicName:'2020[JAN-JUN]'},{Academicid:2,AcademicName:'2020[JUL-DEC]'}];
    this.selectclass=[{Selectid:1,Selectname:'YEAR 1'},{Selectid:2,Selectname:'YEAR 2'},{Selectid:3,Selectname:'YEAR 3'}];
    this.section=[{Sectionid:1,Sectionname:'A'},{Sectionid:2,Sectionname:'B'},{Sectionid:3,Sectionname:'C'},{Sectionid:4,Sectionname:'D'}];
  }
  Tryingformid = new FormGroup({
    aca: new FormControl(),
    Class: new FormControl(),
    sec:new FormControl(),
    namee:new FormControl(),
    rollnum: new FormControl()

  });
  onFormSubmit(){
    this.kavitha.navigate(['specialneed']);
    let academicname=this.Tryingformid.get('aca').value;
    let select=this.Tryingformid.get('Class').value;
    let sectionname=this.Tryingformid.get('sec').value;
    let selectname=this.Tryingformid.get('namee').value;
    let Rollnum=this.Tryingformid.get('rollnum').value
    
    }

}
