import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './main/modals/edit/edit.component';
import { AddComponent } from './main/modals/add/add.component';
import { ViewComponent } from './main/modals/view/view.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
