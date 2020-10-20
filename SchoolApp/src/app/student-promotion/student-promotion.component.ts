import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import{Router} from '@angular/router';
import { AuthService} from '../authentication/services/auth.service'


@Component({
  selector: 'app-student-promotion',
  templateUrl: './student-promotion.component.html',
  styleUrls: ['./student-promotion.component.css']
})
export class StudentPromotionComponent implements OnInit {
  arr: Array<{Classid: number, ClassName: string }>=[];
  section:Array<{Sectionid:number, SectionName: string}>=[]
  invalidCredentialMsg: string;


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.arr = [{ Classid: 1, ClassName: 'year1' }, { Classid: 2, ClassName: 'year2' }, { Classid: 3, ClassName: 'year3' }];
      this.section =[{Sectionid: 1, SectionName:'A'},{Sectionid: 2, SectionName: 'B'}, {Sectionid:3, SectionName: 'C'}];
  }
  StudentPromotion= new FormGroup({
    stdname: new FormControl(),
    rgnumber: new FormControl(),
    rollnumber: new FormControl(),
    dob:new FormControl(),
    Class: new FormControl(),
    Section: new FormControl(),
    fname: new FormControl(),
    fpnumber: new FormControl(),
    mname: new FormControl(),
    mpnumber: new FormControl(),
    egrade:new FormControl(),
    schoolname:new FormControl(),
    address:new FormControl(),
    hsign:new FormControl()

  });
  onFromSubmit(){
let studentname=this.StudentPromotion.get('stdname').value;
let registernumber=this.StudentPromotion.get('rgnumber').value;
let rnumber=this.StudentPromotion.get('rollnumber').value;
let db=this.StudentPromotion.get('dob').value;
let clas=this.StudentPromotion.get('Class').value;
let sec=this.StudentPromotion.get('Section').value;
let fnam=this.StudentPromotion.get('fname').value;
let fpnum=this.StudentPromotion.get('fpnumber').value;
let mnam=this.StudentPromotion.get('mname').value;
let mpnum=this.StudentPromotion.get('mpnumber').value;
let egrad=this.StudentPromotion.get('egrade').value;
let sname=this.StudentPromotion.get('schoolname').value;
let addr=this.StudentPromotion.get('address').value();
let headsign=this.StudentPromotion.get('hsign').value()
this.authService.isUserAuthenticated(clas,sec).subscribe(
  authenticated => {
    if (authenticated) {
      let url ='/adminsetup';// this.authService.getRedirectUrl();
      console.log('Redirect Url:' + url);
      this.router.navigate([url]);
    } else {
      this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
    }
  }
);
}
  


}
