import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-need-children',
  templateUrl: './special-need-children.component.html',
  styleUrls: ['./special-need-children.component.css']
})
export class SpecialNeedChildrenComponent implements OnInit {
  section: Array<{Sectionid: number, SectionName: string}>=[];

  constructor() { }
  myFunction(kavi,section){
    console.log(kavi.value);
    console.log(section.value);
  }

  ngOnInit() {
    this.section =[{Sectionid: 1, SectionName:'A'},{Sectionid: 2, SectionName: 'B'}, {Sectionid:3, SectionName: 'C'}];
  }

}
