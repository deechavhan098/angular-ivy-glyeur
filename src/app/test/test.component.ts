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

    <h2>**Property Binding**</h2>
    <Input [id]="myId" type="text" value="Hello" />
    <Input [disabled]="isDisabled" id="{{ myId }}" value="HII" />
    <Input bind-disabled="isDisabled" id="{{ myId }}" value="HII" />

    <h2>**Class Binding**</h2>
    <h2 class="text-sucess">Class Attribute</h2>
    <h2 [class]="textSucess">Class Binding</h2>
    <h2 [class.text-danger]="hasError">Class Binding</h2>
    <h2 [ngClass]="message">Class Binding</h2>

    <h2>**Style Binding**</h2>
    <h2 [style.color]="'orange'">Style Binding 1</h2>
    <h2 [style.color]="hasError ? 'red' : 'blue'">Style Binding 2</h2>
    <h2 [ngStyle]="style">Style Binding 3</h2>

    <button (click)="sayMessage()" [disabled]="canClick">
      Trigger alert message
    </button>
  `,
  styles: [
    `
      .text-sucess {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-sucess {
        font-style: italic;
      }
    `
  ]
})
export class TestComponent implements OnInit {
  public name = 'Deepali';
  public myId = 'testId';
  public isDisabled = 'false';
  public textSucess = 'text-sucess';
  public hasError = false;
  public isSpecial = true;
  public message = {
    'text-sucess': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };
  public style = {
    color: 'orange',
    fontStyle: 'italic'
  };

  greetUser() {
    return 'Hello ' + this.name;
  }
  canClick = false;
  public messageSay = 'hello';
  sayMessage() {
    alert(this.messageSay);
  }
  constructor() {}

  ngOnInit() {}
}
