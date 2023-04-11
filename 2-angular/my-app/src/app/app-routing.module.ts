import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TasksComponent } from './tasks/tasks.component';



const routes: Routes = [
  { path: '', redirectTo: '/hello-world', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
