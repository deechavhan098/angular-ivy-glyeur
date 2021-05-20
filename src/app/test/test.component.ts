import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div>Hello {{ name }}</div>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <Input [id]="myId" type="text" value="Hello" />
    <Input [disabled]="isDisabled" id="{{ myId }}" value="HII" />
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Deepali';
  public myId = 'testId';
  public isDisabled = 'true';

  greetUser() {
    return 'Hello ' + this.name;
  }
  constructor() {}

  ngOnInit() {}
}
