import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [RemoteEntryComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'list',
            component: ListComponent
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
