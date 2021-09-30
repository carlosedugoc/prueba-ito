import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddComponent } from './modals/add/add.component';
import { MainService } from './main.service';
import { EditComponent } from './modals/edit/edit.component';
import { ViewComponent } from './modals/view/view.component';
import { IUser } from './user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnInit  {

  displayedColumns: string[] = ['user', 'email', 'name', 'surname', 'active', 'actions'];
  ELEMENT_DATA: IUser[] = []
  dataSource = new MatTableDataSource<IUser>(this.ELEMENT_DATA);

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


