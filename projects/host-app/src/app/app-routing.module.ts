import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MFE_APP_URL = 'http://localhost:4300/remoteEntry.js';

const routes: Routes = [
  {
    path: 'mfe',
    loadComponent: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP_URL,
        exposedModule: './MfeComponent',
      })
        .then((m) => m.MfeComponent)
        .catch((err) => console.error(err));
    },
  },
  {
    path: 'registation',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: MFE_APP_URL,
        exposedModule: './RegistationModule',
      })
        .then((m) => m.RegistationModule)
        .catch((err) => console.error(err));
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
