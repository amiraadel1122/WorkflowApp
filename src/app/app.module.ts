import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular imports
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

//Created components
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { DiagramModelComponent } from './workflow/diagram-model/diagram-model.component';

//Imports for material components
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';

// import the DiagramModule for the Diagram component
import {DiagramModule, DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    HomeComponent,
    NewActivityComponent,
    CategoryComponent,
    SubcategoryComponent,
    WorkflowComponent,
    DiagramModelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Angular imports
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DragDropModule,
    //material components
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatTooltipModule,
    MatStepperModule,
    MatSelectModule,
   //DiagramModule
   DiagramModule,
   DiagramAllModule,
    SymbolPaletteAllModule,
     OverviewAllModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
