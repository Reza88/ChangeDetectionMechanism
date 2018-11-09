import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-object',
  templateUrl: './child-object.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildObjectComponent implements OnInit {
  @Input() personObject:any; 

  constructor() { }

  ngOnInit() {
  }
}
