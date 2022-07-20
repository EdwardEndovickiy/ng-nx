import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-mf-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {}
