import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginGuard } from './login.guard';
import { WrapperComponent } from './wrapper/wrapper.component';

enum REMOTE_URL {
  PERSONS = 'persons',
  LOGIN = 'login'
}

@NgModule({
  declarations: [AppComponent, WrapperComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          canActivate: [LoginGuard],
          component: WrapperComponent,
          children: [
            {
              path: REMOTE_URL.PERSONS,
              loadChildren: () => import('persons/Module').then((m) => m.RemoteEntryModule),
            }
          ]
        },
        {
          path: REMOTE_URL.LOGIN,
          loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
