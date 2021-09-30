import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user = new FormControl('');
  email = new FormControl('');
  name = new FormControl('');
  surname = new FormControl('');

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ViewComponent>) { }

  ngOnInit(): void {
    this.user.setValue(this.data.user)
    this.email.setValue(this.data.email)
    this.name.setValue(this.data.name)
    this.surname.setValue(this.data.surname)
  }

  close() {
    this.dialogRef.close()
  }

}
