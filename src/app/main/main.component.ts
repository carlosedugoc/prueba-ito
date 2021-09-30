import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddComponent } from './modals/add/add.component';
import { MainService } from './main.service';
import { EditComponent } from './modals/edit/edit.component';
import { ViewComponent } from './modals/view/view.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnInit  {

  displayedColumns: string[] = ['user', 'email', 'name', 'surname', 'active', 'actions'];
  ELEMENT_DATA: PeriodicElement[] = []
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog, private mainService: MainService){}

  ngOnInit(): void {
    this.mainService.data$.subscribe(res => {
      this.ELEMENT_DATA = res
      this.dataSource.data = this.ELEMENT_DATA
    })
  }

  user = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);

  getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}

  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(element) {
    console.log(element)
    const dialogRef = this.dialog.open(EditComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogView(element) {
    console.log(element)
    const dialogRef = this.dialog.open(ViewComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  search() {
    this.mainService.searchData(this.user.value)
  }

}

export interface PeriodicElement {
  user: string;
  email: string;
  name: string;
  surname: string;
  active: boolean;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {user: 'Hydrogen',email: 'Hydrogen@gmail.com', name:'Hydrogen', surname: 'H', active: true},
//   {user: 'Helium',email: 'Helium@gmail.com', name:'Helium', surname: 'He', active: true},
//   {user: 'Lithium',email: 'Lithium@gmail.com', name:'Lithium', surname: 'Li', active: true},
//   {user: 'Beryllium',email: 'Beryllium@gmail.com', name:'Beryllium', surname: 'Be', active: true},
//   {user: 'Boron',email: 'Boron@gmail.com', name:'Boron', surname: 'B', active: true},
//   {user: 'Carbon',email: 'Carbon@gmail.com', name:'Carbon', surname: 'C', active: true},
//   {user: 'Nitrogen',email: 'Nitrogen@gmail.com', name:'Nitrogen', surname: 'N', active: true},
//   {user: 'Oxygen',email: 'Oxygen@gmail.com', name:'Oxygen', surname: 'O', active: true},
//   {user: 'Fluorine',email: 'Fluorine@gmail.com', name:'Fluorine', surname: 'F', active: true},
//   {user: 'Neon',email: 'Neon@gmail.com', name:'Neon', surname: 'Ne', active: true},
//   {user: 'Sodium',email: 'Sodium@gmail.com', name:'Sodium', surname: 'Na', active: true},
//   {user: 'Magnesium',email: 'Magnesium@gmail.com', name:'Magnesium', surname: 'Mg', active: true},
//   {user: 'Aluminum',email: 'Aluminum@gmail.com', name:'Aluminum', surname: 'Al', active: true},
//   {user: 'Silicon',email: 'Silicon@gmail.com', name:'Silicon', surname: 'Si', active: true},
//   {user: 'Phosphorus',email: 'Phosphorus@gmail.com', name:'Phosphorus', surname: 'P', active: true},
//   {user: 'Sulfur',email: 'Sulfur@gmail.com', name:'Sulfur', surname: 'S', active: true},
//   {user: 'Chlorine',email: 'Chlorine@gmail.com', name:'Chlorine', surname: 'Cl', active: true},
//   {user: 'Argon',email: 'Argon@gmail.com', name:'Argon', surname: 'Ar', active: true},
//   {user: 'Potassium',email: 'Potassium@gmail.com', name:'Potassium', surname: 'K', active: true},
//   {user: 'Calcium',email: 'Calcium@gmail.com', name:'Calcium', surname: 'Ca', active: true},
// ];



