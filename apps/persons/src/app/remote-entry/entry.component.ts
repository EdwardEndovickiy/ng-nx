import { Component } from '@angular/core';

@Component({
  selector: 'ng-mf-persons-entry',
  template: `<div>
    <p>wrapper persons</p>

    <a routerLink="./list">To List</a>

    <router-outlet></router-outlet>
  </div>`,
})
export class RemoteEntryComponent {}
