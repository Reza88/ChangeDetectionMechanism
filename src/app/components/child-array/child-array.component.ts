import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-array',
  templateUrl: './child-array.component.html',
  changeDetection:ChangeDetectionStrategy.Default
})
export class ChildArrayComponent implements OnInit {
  @Input() personArray:any; 

  constructor() { }

  ngOnInit() {
  }
}
