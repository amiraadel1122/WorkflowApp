import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { NewActivityComponent } from './new-activity/new-activity.component'
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { WorkflowComponent } from './workflow/workflow.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
 
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'newactivity', component: NewActivityComponent},
      { path: 'category', component:  CategoryComponent},
      { path: 'subcategory', component: SubcategoryComponent},
      { path: 'workflow', component: WorkflowComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
