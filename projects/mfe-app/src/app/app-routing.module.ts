import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registation',
    loadChildren: () =>
      import('./registation/registation.module').then(
        (m) => m.RegistationModule
      ),
  },
  {
    path: 'mfe',
    loadComponent: () =>
      import('./mfe/mfe.component').then(
        (m) => m.MfeComponent
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
